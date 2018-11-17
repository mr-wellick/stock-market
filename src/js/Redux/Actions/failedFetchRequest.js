import { FAILED_FETCH_REQUEST } from "../Constants/";

function failedFetchRequest(stockDataError)
{
    return {
        type: FAILED_FETCH_REQUEST,
        stockDataError
    };
}

export default failedFetchRequest;
