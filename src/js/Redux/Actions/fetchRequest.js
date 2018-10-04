import { FETCH_DATA_REQUEST } from "../Constants/";

function fetchRequest(isFetching)
{
    return {
        type: FETCH_DATA_REQUEST,
        isFetching
    };
}

export default fetchRequest;
