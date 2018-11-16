import { INITIATED_FETCH_REQUEST }  from "../Constants/";
import { SUCCESSFUL_FETCH_REQUEST } from "../Constants/";
//import { FAILED_FETCH_REQUEST }     from "../Constants/";

let initialState = {
    isFetchingData: false,
    stockData: []
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
        default:
            return state;
    }
}

export default fetchDataReducer;