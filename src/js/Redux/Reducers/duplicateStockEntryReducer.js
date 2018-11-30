import { ENTERED_DUPLICATE_STOCK }     from "../Constants/";
import { RESET_DUPLICATE_STOCK_ENTRY } from "../Constants/";

const initialState = {
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
        case RESET_DUPLICATE_STOCK_ENTRY:
            return {
                ...state,
                stockName: action.stockName
            };
        default:
            return state;
    }
}

export default duplicateStockEntryReducer;
