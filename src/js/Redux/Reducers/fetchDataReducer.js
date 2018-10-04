import { FETCH_DATA_COMPLETE } from "../Constants/";
import { FETCH_DATA_REQUEST }  from "../Constants/";

let initialState = {
    successData: [],
    errorData: [],
    manyCallsData: [],
    isFetching: false
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
        case FETCH_DATA_REQUEST:
            return Object.assign({}, state, {
                ...state,
                isFetching: action.isFetching
            });
        default:
            return state;
    }
}

export default fetchDataReducer;
