import { USER_INPUT }     from "../Constants";
import { USER_SELECTION } from "../Constants";
import { ACTIVE_STOCK }   from "../Constants";

let initialState = {
    assetNames: ["TSLA", "KO", "IBM", "AAPL", "NFLX"],
    assetType: "function=TIME_SERIES_MONTHLY_ADJUSTED&",
    activeStockData: {}
};

function userInteractionReducer(state = initialState, action)
{
    switch(action.type)
    {
        case USER_INPUT:
            return Object.assign({}, state, {
                ...state,
                assetNames: action.assetNames
            });
        case USER_SELECTION:
            return Object.assign({}, state, {
                ...state,
                assetType: action.assetType
            });
        case ACTIVE_STOCK:
            return Object.assign({}, state, {
                ...state,
                activeStockData: action.activeStockData
            });
        default:
            return state;
    }
}

export default userInteractionReducer;
