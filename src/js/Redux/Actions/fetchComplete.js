import { FETCH_DATA_COMPLETE } from "../Constants/";

function fetchComplete(arrayOfData)
{
    let successData   = arrayOfData.filter(item => item["type"] === "FETCH_DATA_SUCCESS");
    let errorData     = arrayOfData.filter(item => item["type"] === "FETCH_DATA_ERROR");
    let manyCallsData = arrayOfData.filter(item => item["type"] === "FETCH_DATA_TOO_MANY_CALLS");

    return {
        type: FETCH_DATA_COMPLETE,
        successData,
        errorData,
        manyCallsData
    };
}

export default fetchComplete;
