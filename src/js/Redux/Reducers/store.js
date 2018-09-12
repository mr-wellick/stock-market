// Reducers
import stockReducer          from "./stock-reducer";
import fetchDataReducer      from "./fetch-data-reducer";
import isFetchingDataReducer from "./is-fetching-data-reducer";

// Redux imports
import { combineReducers } from "redux";
import { createStore }     from "redux";
import { applyMiddleware } from "redux";
import { createLogger }    from "redux-logger";
import thunkMiddleware     from "redux-thunk";

// Gather reducers
let rootReducer = combineReducers({
     userInteraction: stockReducer,
     fetchedData: fetchDataReducer,
     networkRequest: isFetchingDataReducer
});

// Create action logger for development
let logger = createLogger();
let store;

// Make sure logger middleware is only available in development
if(process.env.NODE_ENV === "development")
{
    store = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    );
}
else
{
    store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );
}

export default store;
