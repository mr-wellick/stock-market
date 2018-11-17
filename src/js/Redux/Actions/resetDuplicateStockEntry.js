import { RESET_DUPLICATE_STOCK_ENTRY } from "../Constants/";

function resetDuplicateStockEntry()
{
    return {
        type: RESET_DUPLICATE_STOCK_ENTRY,
        stockName: ""
    };
}

export default resetDuplicateStockEntry;
