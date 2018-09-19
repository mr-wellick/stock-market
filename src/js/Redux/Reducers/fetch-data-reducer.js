import { FETCH_COMPLETE } from "../Constants";

let initialState = {
    successData: [],
    errorData: [],
    tooManyCallsData: []
};

function fetchDataReducer(state = initialState, action)
{
    switch(action.type)
    {
        case FETCH_COMPLETE:
            return Object.assign({}, state, {
                ...state,
                success: action.successData,
                error: action.errorData,
                tooManyCalls: action.tooManyCallsData
            });
        default:
            return state;
    }
}

export default fetchDataReducer;
