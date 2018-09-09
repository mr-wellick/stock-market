import { FETCH_COMPLETE } from "../Constants";

function fetchComplete(assetsData)
{
    return {
        type: FETCH_COMPLETE,
        assetsData
    };
}

export default fetchComplete;
