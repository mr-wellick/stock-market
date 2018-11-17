import { ENTERED_DUPLICATE_STOCK } from "../Constants/";

let initialState = {
    stockName: ""
};

function duplicateStockEntryReducer(state = initialState, action)
{
    switch(action.type)
    {
        case ENTERED_DUPLICATE_STOCK:
            return {
                ...state,
                stockName: action.stockName
            };
        default:
            return state;
    }
}

export default duplicateStockEntryReducer;
