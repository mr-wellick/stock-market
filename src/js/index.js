import React        from "react";
import { render }   from "react-dom";
import { Provider } from "react-redux";
import { store }    from "./Redux";
import App          from "./App";
import "../css/style.scss";

render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    window.document.querySelector(".app")
);
