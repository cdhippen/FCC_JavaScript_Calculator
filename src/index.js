import "./styles";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Calculator from "./Calculator";
import store from "./store";

const AppWrapper = () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

render(<AppWrapper />, document.getElementById("root"));
