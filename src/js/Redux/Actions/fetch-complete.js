import { FETCH_COMPLETE }       from "../Constants";
import { FETCH_SUCCESS }        from "../Constants";
import { FETCH_ERROR }          from "../Constants";
import { FETCH_TOO_MANY_CALLS } from "../Constants";

function fetchComplete(assetsData)
{
    // Filter data
    let successData      = assetsData.filter( dataSet => dataSet["type"] === FETCH_SUCCESS );
    let errorData        = assetsData.filter( dataSet => dataSet["type"] === FETCH_ERROR );
    let tooManyCallsData = assetsData.filter( dataSet => dataSet["type"] === FETCH_TOO_MANY_CALLS );

    return {
        type: FETCH_COMPLETE,
        successData,
        errorData,
        tooManyCallsData
    };
}

export default fetchComplete;
