import { FETCHING_DATA } from "../../Constants";

function isFetchingData()
{
    return {
        type: FETCHING_DATA,
        isFetching: true
    };
}

export default isFetchingData;