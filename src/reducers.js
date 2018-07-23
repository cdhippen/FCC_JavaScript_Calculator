import {
  CLEAR,
  CLEARENTRY,
  BACKSPACE,
  METHOD,
  NUMBERS,
  CHS,
  DECIMAL,
  EQUALS,
  ZERO
} from "./actionTypes";

const methods = ["*", "+", "/", "-"];

const initialState = {
  calc: "",
  value: "0",
  lastValue: ""
};

function entryReducer(state = initialState, action) {
  switch (action.type) {
    case NUMBERS:
      return {
        ...state,
        value:
          state.value === "0" || methods.indexOf(state.lastValue) >= 0
            ? action.value
            : state.value + action.value,
        lastValue: action.value
      };

    case ZERO:
      return {
        ...state,
        value: state.value === "0" ? state.value : state.value + "0"
      };

    case DECIMAL:
      return {
        ...state,
        value: state.value.indexOf(".") >= 0 ? state.value : state.value + "."
      };

    case BACKSPACE:
      return {
        ...state,
        value: state.value.length > 1 ? state.value.slice(0, -1) : "0"
      };

    case METHOD:
      console.log(state.heldValue);
      return {
        ...state,
        value:
          methods.indexOf(state.lastValue) < 0
            ? eval(state.calc + state.value)
            : state.value,
        calc:
          methods.indexOf(state.lastValue) < 0
            ? state.calc +
              state.value.replace(
                /^(\d+(?:\.\d*?[1-9](?=0|\b))?)\.?0*$/,
                "$1"
              ) +
              action.value
            : methods.indexOf(action.value) >= 0
              ? state.calc.slice(0, -1) + action.value
              : null,
        lastValue: action.value
      };

    case EQUALS:
      return {
        ...state,
        value: eval(state.calc + state.value).toString(),
        lastValue: "",
        calc: ""
      };

    case CHS:
      return {
        ...state,
        value:
          state.value[0] === "-"
            ? state.value.slice(1)
            : state.value === "0"
              ? state.value
              : "(-" + state.value + ")"
      };

    case CLEARENTRY:
      return {
        ...state,
        value: "0"
      };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
}

export default entryReducer;
