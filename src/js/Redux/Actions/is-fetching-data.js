import { IS_FETCHING_DATA } from "../Constants";

function isFetchingData(requesting)
{
    return {
        type: IS_FETCHING_DATA,
        isFetching: requesting
    };
}

export default isFetchingData;
