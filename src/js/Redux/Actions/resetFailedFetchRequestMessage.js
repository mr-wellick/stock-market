import { RESET_FAILED_FETCH_REQUEST_MESSAGE } from "../Constants/";

function resetFailedFetchRequestMessage()
{
    return {
        type: RESET_FAILED_FETCH_REQUEST_MESSAGE,
        stockDataError: ""
    };
}

export default resetFailedFetchRequestMessage;
