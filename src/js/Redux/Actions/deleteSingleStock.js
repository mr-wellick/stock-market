import { DELETE_SINGLE_STOCK } from "../Constants/";

function deleteSingleStock(stockName)
{
    return {
        type: DELETE_SINGLE_STOCK,
        stockName
    };
}

export default deleteSingleStock;
