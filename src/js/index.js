import "../css/style.scss";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.querySelector(".app")
);
