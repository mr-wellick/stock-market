import { IS_FETCHING_DATA } from "../Constants";

function isFetchingDataReducer(
    state = {
        isFetching: false
    },
    action
)
{
    switch(action.type)
    {
        case IS_FETCHING_DATA:
            return Object.assign({}, state, {
                ...state,
                isFetching: action.isFetching
            });
        default:
            return state;
    }
}

export default isFetchingDataReducer;