import { FETCH_COMPLETE } from "../Constants";

let initialState = {
    successData: [],
    errorData: [],
    tooManyCallsData: []
};

function receivedDataReducer(state = initialState, action)
{
    switch(action.type)
    {
        case FETCH_COMPLETE:
            return Object.assign({}, state, {
                ...state,
                successData: action.successData,
                errorData: action.errorData,
                tooManyCallsData: action.tooManyCallsData
            });
        default:
            return state;
    }
}

export default receivedDataReducer;
