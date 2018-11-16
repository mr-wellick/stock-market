import { INITIATED_FETCH_REQUEST } from "../Constants/";

function initiatedFetchRequest(isFetchingData)
{
    return {
        type: INITIATED_FETCH_REQUEST,
        isFetchingData
    };
}

export default initiatedFetchRequest;