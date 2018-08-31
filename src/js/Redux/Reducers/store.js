// Reducers
import stockReducer     from "./stock-reducer";
import fetchDataReducer from "./fetch-data-reducer";

// Redux imports
import { combineReducers } from "redux";
import { createStore }     from "redux";
import { applyMiddleware } from "redux";
import { createLogger }    from "redux-logger";
import thunkMiddleware     from "redux-thunk";

// Gather reducers
let rootReducer = combineReducers({
     userInteraction: stockReducer,
     fetchedData: fetchDataReducer
});

// Create action logger for development
let logger = createLogger();

// Finally create store
let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);

export default store;