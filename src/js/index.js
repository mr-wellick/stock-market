// React & React-Router
import React      from "react";
import { render } from "react-dom";

// Import CSS
import "../css/style.scss";
import App from "./App";

// Import Redux
import { Provider } from "react-redux";
import { store }    from "./Redux";

render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    window.document.querySelector(".app")
);
