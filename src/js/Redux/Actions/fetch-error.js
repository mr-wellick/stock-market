import { FETCH_ERROR } from "../Constants";

// Process data when incorrect api call is made
function fetchError(assetData){

    let customErrorMessage = "You have entered an invalid stock ticker. Please try again.";

    return {
        type: FETCH_ERROR,
        assetData,
        errorMessage: customErrorMessage,
    };
}

export default fetchError;
