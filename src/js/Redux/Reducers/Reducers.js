import { USER_DATA_TYPE_SELECTION } from "../Actions";
import { GET_USER_INPUT }           from "../Actions";
import { FETCH_DATA }               from "../Actions";
import { ERROR_ON_FETCH_DATA }      from "../Actions";
import { combineReducers }          from "redux";
import { createStore }              from "redux";
import { applyMiddleware }          from "redux";
import { createLogger }             from "redux-logger";
import thunkMiddleware              from "redux-thunk";

function userSelectReducer(state = { dataType: "function=TIME_SERIES_MONTHLY_ADJUSTED&" }, action)
{
    switch(action.type)
    {
        case USER_DATA_TYPE_SELECTION:
            return Object.assign({}, state, {
                dataType: action.dataType
            });
        default:
            return state;
    }
}

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

function get(
    state =
    {
        stockData: [],
         dates: [],
         open: [],
         high: [],
         low: [],
         close: [],
         adjustedClose: [],
         percentChange: [],
         error: false,
         errorMessage: ""
    },
    action
)
{
    switch(action.type)
    {
        case FETCH_DATA:
            return Object.assign({}, state, {
                stockData: action.stockData,
                dates: action.dates,
                open: action.open,
                high: action.high,
                low: action.low,
                close: action.close,
                adjustedClose: action.adjustedClose,
                percentChange: action.percentChange,
                error: action.error,
                errorMessage: action.errorMessage
            });
        case ERROR_ON_FETCH_DATA:
            return Object.assign({}, state, {
                stockData: action.stockData,
                dates: [],
                open: [],
                high: [],
                low: [],
                close: [],
                adjustedClose: [],
                percentChange: [],
                error: action.error,
                errorMessage: action.errorMessage
            });
        default:
            return state;
    }
}

// Create reducer
let rootReducer = combineReducers({
    stockName: userInputReducer,
    stockData: get,
    dataType: userSelectReducer
});

// Create store
let loggerMiddleware = createLogger();
let store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
