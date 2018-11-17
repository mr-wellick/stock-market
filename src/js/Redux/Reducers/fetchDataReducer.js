import { INITIATED_FETCH_REQUEST }  from "../Constants/";
import { SUCCESSFUL_FETCH_REQUEST } from "../Constants/";
import { FAILED_FETCH_REQUEST }     from "../Constants/";

let initialState = {
    isFetchingData: false,
    stockData: [],
    stockDataError: []
};

function fetchDataReducer(state = initialState, action)
{
    switch(action.type)
    {
        case INITIATED_FETCH_REQUEST:
            return {
                ...state,
                isFetchingData: action.isFetchingData
            };
        case SUCCESSFUL_FETCH_REQUEST:
            return {
                ...state,
                stockData: [ ...state.stockData, action.stockData]
            };
        case FAILED_FETCH_REQUEST:
            return {
                ...state,
                stockDataError: action.stockDataError
            };
        default:
            return state;
    }
}

export default fetchDataReducer;
