import { FAILED_FETCH_REQUEST } from "../Constants/";

function failedFetchRequest(stockName)
{
    return {
        type: FAILED_FETCH_REQUEST,
        stockName
    };
}

export default failedFetchRequest;