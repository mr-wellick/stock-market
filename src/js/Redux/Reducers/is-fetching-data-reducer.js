import { IS_FETCHING_DATA } from "../Constants";

let initialState = {
    requestingData: false
};

function isFetchingDataReducer(state = initialState, action)
{
    switch(action.type)
    {
        case IS_FETCHING_DATA:
            return Object.assign({}, state, {
                ...state,
                requestingData: action.requestingData
            });
        default:
            return state;
    }
}

export default isFetchingDataReducer;
