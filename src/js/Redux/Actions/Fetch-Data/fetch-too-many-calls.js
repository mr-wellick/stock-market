import { FETCH_TOO_MANY_CALLS } from "../../Constants";

// Process data when incorrect api call is made
function fetchTooManyCalls(assetData){

    // Process too many api calls
    let processedData = Object.entries(assetData);

    return {
        type: FETCH_TOO_MANY_CALLS,
        assetData: [],
        error: true,
        errorMessage: processedData[0][1],
        processedData: {}
    };
}

export default fetchTooManyCalls;
