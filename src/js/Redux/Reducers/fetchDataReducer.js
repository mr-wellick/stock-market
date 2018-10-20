import { FETCH_DATA_COMPLETE }           from "../Constants/";
import { FETCH_DATA_REQUEST }            from "../Constants/";
import { RESET_DATA_ERRORS }             from "../Constants/";
import { RESET_DATA_WARNINGS }           from "../Constants/";
import { USER_ENTERED_DUPLICATE_STOCKS } from "../Constants/";
import { RESET_DUPLICATE_ENTRIES }       from "../Constants/";
import { USER_SELECT_FREQUENCY }         from "../Constants/";

let initialState = {
    successData: [],
    errorData: [],
    manyCallsData: [],
    isFetching: false,
    duplicateEntries: [],
    frequency: "function=TIME_SERIES_MONTHLY_ADJUSTED&"
};

function fetchDataReducer(state = initialState, action)
{
    switch(action.type)
    {
        case FETCH_DATA_COMPLETE:
            return {
                ...state,
                successData: [...state.successData, ...action.successData],
                errorData: action.errorData,
                manyCallsData: action.manyCallsData
            };
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case RESET_DATA_ERRORS:
            return {
                ...state,
                errorData: action.errorData
            };
        case RESET_DATA_WARNINGS:
            return {
                ...state,
                manyCallsData: action.manyCallsData
            };
        case RESET_DUPLICATE_ENTRIES:
            return {
                ...state,
                duplicateEntries: action.duplicateEntries
            };
        case USER_ENTERED_DUPLICATE_STOCKS:
            return {
                ...state,
                duplicateEntries: action.duplicateEntries
            };
        case USER_SELECT_FREQUENCY:
            return {
                ...state,
                frequency: action.frequency
            };
        default:
            return state;
    }
}

export default fetchDataReducer;
