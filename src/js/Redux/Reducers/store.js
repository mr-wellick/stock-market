// Reducers
import userInputReducer     from "./user-input-reducer";
import userSelectionReducer from "./user-selection-reducer";

// Redux imports
import { combineReducers } from "redux";
import { createStore }     from "redux";
import { applyMiddleware } from "redux";
import { createLogger }    from "redux-logger";
import thunkMiddleware     from "redux-thunk";

// Gather reducers
let rootReducer = combineReducers({
    assetName: userInputReducer,
    assetType: userSelectionReducer
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