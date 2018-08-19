// import { USER_DATA_TYPE_SELECTION } from "../Actions";
import { GET_USER_INPUT }           from "../Actions";
import { combineReducers }          from "redux";
import { createStore }              from "redux";
import { applyMiddleware }          from "redux";
import { createLogger }             from "redux-logger";
import thunkMiddleware              from "redux-thunk";

// function userSelectReducer(state = { dataType: "function=TIME_SERIES_MONTHLY_ADJUSTED" }, action)
// {
//     switch(action.type)
//     {
//         case USER_DATA_TYPE_SELECTION:
//             return Object.assign({}, state, {
//                 dataType: action.dataType
//             });
//         default:
//             return state;
//     }
// }

function userInputReducer(state = { stockName: "TSLA" }, action)
{
    switch(action.type)
    {
        case GET_USER_INPUT:
            return Object.assign({}, state, {
                stockName: action.stockName
            });
        default:
            return state;
    }
}

// Create reducer
// let rootReducer = combineReducers({
//     userSelectReducer,
//     userInputReducer
// });

// Create store
let loggerMiddleware = createLogger();
let store = createStore(
    userInputReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
