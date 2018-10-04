import { FETCH_DATA_TOO_MANY_CALLS } from "../Constants/";

function fetchManyCalls(data)
{
    return {
        type: FETCH_DATA_TOO_MANY_CALLS,
        data,
        message: "Can only retrieve 5 stocks per minute. Please wait."
    };
}

export default fetchManyCalls;
