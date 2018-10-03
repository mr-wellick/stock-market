// Reducers

// Redux imports
import { combineReducers } from "redux";
import { createStore }     from "redux";
import { applyMiddleware } from "redux";
import { createLogger }    from "redux-logger";
import thunkMiddleware     from "redux-thunk";

// Gather reducers
let rootReducer = combineReducers({
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
