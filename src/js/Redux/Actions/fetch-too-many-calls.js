import { FETCH_TOO_MANY_CALLS } from "../Constants";

// Process data when incorrect api call is made
function fetchTooManyCalls(assetData){

    let customErrorMessage = "You have exceeded the call limit. Please wait a few seconds and try again.";

    return {
        type: FETCH_TOO_MANY_CALLS,
        assetData,
        error: true,
        errorMessage: customErrorMessage,
        processedData: {}
    };
}

export default fetchTooManyCalls;
