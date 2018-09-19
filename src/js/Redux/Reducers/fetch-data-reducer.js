import { FETCH_COMPLETE } from "../Constants";

let initialState = {
    success: [],
    error: [],
    tooManyCalls: []
};

function fetchDataReducer(state = initialState, action)
{
    switch(action.type)
    {
        case FETCH_COMPLETE:
            return Object.assign({}, state, {
                ...state,
                success: action.success,
                error: action.error,
                tooManyCalls: action.tooManyCalls
            });
        default:
            return state;
    }
}

export default fetchDataReducer;
