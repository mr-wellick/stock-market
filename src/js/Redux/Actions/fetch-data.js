import { store }         from "../Reducers";
import fetchError        from "./fetch-error";
import fetchSuccess      from "./fetch-success";
import fetchTooManyCalls from "./fetch-too-many-calls";
import isFetchingData    from "./is-fetching-data";
import fetchComplete     from "./fetch-complete.js";

// Make api request
function fetchData(assetNames)
{
    // Get assetType to be requested: monthly or daily
    let { assetType } = store.getState().userInteraction;

    return function(dispatch){
        // Begin request
        dispatch(isFetchingData(true));
        return Promise.all(
            // Iterate through each asset and request
            assetNames.map(name =>
                fetch(`https://www.alphavantage.co/query?${assetType}symbol=${name}&apikey=${process.env.API_KEY}`)
                    .then(res => res.json())
            )
        )
        .then(responseData => {
            // Will use to store final data
            let processedData = [];

            // Checks data and process accordingly
            responseData.map( item => {
                if(item["Error Message"])
                    processedData.push( fetchError(item) );
                else if(item["Meta Data"])
                    processedData.push( fetchSuccess(item) );
                else if(item["Information"])
                    processedData.push( fetchTooManyCalls(item) );
            });

            // End request
            dispatch(fetchComplete(processedData));
            dispatch(isFetchingData(false));
        });
    };
}

export default fetchData;
