import { INITIATED_FETCH_REQUEST }            from "../Constants/";
import { SUCCESSFUL_FETCH_REQUEST }           from "../Constants/";
import { FAILED_FETCH_REQUEST }               from "../Constants/";
import { RESET_FAILED_FETCH_REQUEST_MESSAGE } from "../Constants/";
import { DELETE_SINGLE_STOCK }                from "../Constants/";

let initialState = {
    isFetchingData: false,
    stockData: [],
    stockDataError: ""
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
        case RESET_FAILED_FETCH_REQUEST_MESSAGE:
            return {
                ...state,
                stockDataError: action.stockDataError
            };
        case DELETE_SINGLE_STOCK:
            return {
                ...state,
                stockData: state.stockData.filter(
                    item => item["company"]["symbol"] !== action.stockName
                )
            };
        default:
            return state;
    }
}

export default fetchDataReducer;
