import { IS_FETCHING_DATA } from "../../Constants";

function isFetchingData()
{
    return {
        type: IS_FETCHING_DATA,
        isFetching: true 
    };
}

export default isFetchingData;