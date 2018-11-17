import { ENTERED_DUPLICATE_STOCK } from "../Constants/";

function duplicateStockEntry(stockName)
{
    return {
        type: ENTERED_DUPLICATE_STOCK,
        stockName
    };
}

export default duplicateStockEntry;
