import { FETCH_DATA_ERROR } from "../Constants/";

function fetchError(data)
{
    return {
        type: FETCH_DATA_ERROR,
        data
    };
}

export default fetchError;
