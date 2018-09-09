import { store }         from "../Reducers";
import fetchError        from "./fetch-error";
import fetchSuccess      from "./fetch-success";
import fetchTooManyCalls from "./fetch-too-many-calls";
import isFetchingData    from "./is-fetching-data";
import fetchComplete     from "./fetch-complete.js";

// Make api request
function fetchData(assetsName)
{
    // Get assetType to be requested: monthly or daily
    let { assetType } = store.getState().userInteraction;

    return function(dispatch){
        // Begin request
        dispatch(isFetchingData(true));
        return Promise.all(
            // Iterate through each asset and request
            assetsName.map(name =>
                fetch(`https://www.alphavantage.co/query?${assetType}symbol=${name}&apikey=AAG3PU4MLMB9JHS3`)
                    .then(res => res.json())
            )
        )
        .then( allDataSets => {
            // Will use to store final data
            let checkedData = [];

            // Checks data and process accordingly
            allDataSets.map( item => {
                if(item["Error Message"])
                    checkedData.push( fetchError(item) );
                else if(item["Meta Data"])
                    checkedData.push( fetchSuccess(item) );
                else if(item["Information"])
                    checkedData.push( fetchTooManyCalls(item) );
            });

            // End request
            dispatch(fetchComplete(checkedData));
            dispatch(isFetchingData(false));
        });
    };
}

export default fetchData;
