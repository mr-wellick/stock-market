import { SUCCESSFUL_FETCH_REQUEST } from "../Constants/";

function successfulFetchRequest(stockData)
{
    return {
        type: SUCCESSFUL_FETCH_REQUEST,
        stockData
    };
}

export default successfulFetchRequest;