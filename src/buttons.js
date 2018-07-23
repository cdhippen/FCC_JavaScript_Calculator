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

export const buttons = [
  {
    id: "clear",
    name: "C",
    value: "0",
    space: "clear",
    type: CLEAR
  },
  {
    id: "clearEntry",
    name: "CE",
    value: "",
    space: "clear",
    type: CLEARENTRY
  },
  {
    id: "backspace",
    name: "⌫",
    value: "",
    space: "clear",
    type: BACKSPACE
  },
  {
    id: "seven",
    name: "7",
    value: "7",
    space: "number",
    type: NUMBERS
  },
  {
    id: "eight",
    name: "8",
    value: "8",
    space: "number",
    type: NUMBERS
  },
  {
    id: "nine",
    name: "9",
    value: "9",
    space: "number",
    type: NUMBERS
  },

  {
    id: "four",
    name: "4",
    value: "4",
    space: "number",
    type: NUMBERS
  },
  {
    id: "five",
    name: "5",
    value: "5",
    space: "number",
    type: NUMBERS
  },
  {
    id: "six",
    name: "6",
    value: "6",
    space: "number",
    type: NUMBERS
  },

  {
    id: "one",
    name: "1",
    value: "1",
    space: "number",
    type: NUMBERS
  },
  {
    id: "two",
    name: "2",
    value: "2",
    space: "number",
    type: NUMBERS
  },
  {
    id: "three",
    name: "3",
    value: "3",
    space: "number",
    type: NUMBERS
  },
  {
    id: "posNeg",
    name: "±",
    value: "",
    space: "bottom",
    type: CHS
  },
  {
    id: "zero",
    name: "0",
    value: "0",
    space: "bottom",
    type: ZERO
  },
  {
    id: "decimal",
    name: ".",
    value: ".",
    space: "bottom",
    type: DECIMAL
  },
  {
    id: "add",
    name: "+",
    value: "+",
    space: "method",
    type: METHOD
  },
  {
    id: "subtract",
    name: "-",
    value: "-",
    space: "method",
    type: METHOD
  },
  {
    id: "divide",
    name: "÷",
    value: "/",
    space: "method",
    type: METHOD
  },
  {
    id: "multiply",
    name: "×",
    value: "*",
    space: "method",
    type: METHOD
  },
  {
    id: "equals",
    name: "=",
    value: "=",
    space: "method",
    type: EQUALS
  }
];

export const spaces = [...new Set(buttons.map(item => item.space))];
