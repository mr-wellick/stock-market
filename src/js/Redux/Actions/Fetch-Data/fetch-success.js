import { FETCH_SUCCESS } from "../../Constants";

// Process data when correct api call is made
function fetchSuccess(assetData){
    return {
        type: FETCH_SUCCESS,
        assetData,
    };
}

export default fetchSuccess;