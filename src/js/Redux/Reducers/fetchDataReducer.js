import { FETCH_DATA_COMPLETE } from "../Constants/";

let initialState = {
    successData: [],
    errorData: [],
    manyCallsData: []
};

function fetchDataReducer(state = initialState, action)
{
    switch(action.type)
    {
        case FETCH_DATA_COMPLETE:
            return Object.assign({}, state, {
                ...state,
                successData: [...state.successData, action.successData],
                errorData: action.errorData,
                manyCallsData: action.manyCallsData
            });
        default:
            return state;
    }
}

export default fetchDataReducer;
