import { FETCH_DATA_ERROR } from "../Constants/";

function fetchError(data)
{
    return {
        type: FETCH_DATA_ERROR,
        data,
        message: "You have entered an invalid stock ticker."
    };
}

export default fetchError;
