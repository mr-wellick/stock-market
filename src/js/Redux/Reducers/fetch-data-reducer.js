import { FETCH_SUCCESS }        from "../Constants";
import { FETCH_ERROR }          from "../Constants";
import { FETCH_TOO_MANY_CALLS } from "../Constants";

function fetchDataReducer(
    state = {
        assetData: [],
        error: false,
        errorMessage: "",
        processedData: {}
    },
    action
)
{
    switch(action.type)
    {
        case FETCH_ERROR:
            return Object.assign({}, state, {
                ...state,
                assetData: action.assetData,
                error: action.error,
                errorMessage: action.errorMessage,
                processedData: action.processedData
            });
        case FETCH_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                assetData: action.assetData,
                error: action.error,
                errorMessage: action.errorMessage,
                processedData: action.processedData
            });
        case FETCH_TOO_MANY_CALLS:
            return Object.assign({}, state, {
                ...state,
                assetData: action.assetData,
                error: action.error,
                errorMessage: action.errorMessage,
                processedData: action.processedData
            });
        default:
            return state;
    }
}

export default fetchDataReducer;
