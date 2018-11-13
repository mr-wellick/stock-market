import { FETCH_DATA_TOO_MANY_CALLS } from "../Constants/";

function fetchManyCalls(data)
{
    return {
        type: FETCH_DATA_TOO_MANY_CALLS,
        data
    };
}

export default fetchManyCalls;
