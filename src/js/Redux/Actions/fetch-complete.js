import { FETCH_COMPLETE }       from "../Constants";
import { FETCH_SUCCESS }        from "../Constants";
import { FETCH_ERROR }          from "../Constants";
import { FETCH_TOO_MANY_CALLS } from "../Constants";

function fetchComplete(assetsData)
{
    // Filter data
    let success      = assetsData.filter( dataSet => dataSet["type"] === FETCH_SUCCESS );
    let error        = assetsData.filter( dataSet => dataSet["type"] === FETCH_ERROR );
    let tooManyCalls = assetsData.filter( dataSet => dataSet["type"] === FETCH_TOO_MANY_CALLS );

    return {
        type: FETCH_COMPLETE,
        success,
        error,
        tooManyCalls
    };
}

export default fetchComplete;
