import { FETCH_ERROR } from "../../Constants";

// Process data when incorrect api call is made
function fetchError(assetData){

    return {
        type: FETCH_ERROR,
        assetData,
        error: true,
        errorMessage: assetData[0][1],
        processedData: {}
    };
}

export default fetchError;