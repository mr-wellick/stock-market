// Reducers
import fetchDataReducer           from "./fetchDataReducer.js";
import duplicateStockEntryReducer from "./duplicateStockEntryReducer.js";

// Redux imports
import { combineReducers } from "redux";
import { createStore }     from "redux";
import { applyMiddleware } from "redux";
import { createLogger }    from "redux-logger";
import thunkMiddleware     from "redux-thunk";

// Gather reducers
const rootReducer = combineReducers({
    fetchData: fetchDataReducer,
    duplicateStockEntry: duplicateStockEntryReducer
});

// Create action logger for development
const logger = createLogger();
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
