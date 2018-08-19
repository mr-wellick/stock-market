// React & React-Router
import React      from "react";
import { render } from "react-dom";

// Import CSS
import "../css/style.scss";
import App from "./App";

// Import Redux
import { createStore }     from "redux";
import { applyMiddleware } from "redux";
import { Provider }        from "react-redux";
import { rootReducer }     from "./Redux";
import { createLogger }    from "redux-logger";
import thunkMiddleware     from "redux-thunk";

// Create store
let loggerMiddleware = createLogger();
let store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    window.document.querySelector(".app")
);
