import { FETCH_COMPLETE } from "../Constants";

let initialState = { assetsData: [] };

function fetchDataReducer(state = initialState, action)
{
    switch(action.type)
    {
        case FETCH_COMPLETE:
            return Object.assign({}, state, {
                ...state,
                assetsData: action.assetsData,
            });
        default:
            return state;
    }
}

export default fetchDataReducer;
