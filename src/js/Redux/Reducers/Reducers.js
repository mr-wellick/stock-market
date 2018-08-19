import { USER_DATA_TYPE_SELECTION } from "../Actions";
import { GET_USER_INPUT }           from "../Actions";
import { combineReducers }          from "redux";

function userSelectReducer(state = { dataType: "function=TIME_SERIES_MONTHLY_ADJUSTED" }, action)
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

let rootReducer = combineReducers({
    userSelectReducer,
    userInputReducer
});

export default rootReducer;
