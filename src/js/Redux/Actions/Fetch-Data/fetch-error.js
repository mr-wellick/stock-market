import { FETCH_ERROR } from "../../Constants";

// Process data when incorrect api call is made
function fetchError(assetData){
    // Process data
    let processedData = Object.entries(assetData);

    return {
        type: FETCH_ERROR,
        assetData: processedData,
        error: true,
        errorMessage: processedData[0][1],
        processedData: {},
        apiCallLimitReached: false
    };
}

export default fetchError;
