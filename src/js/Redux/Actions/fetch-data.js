import { store }         from "../Reducers";
import fetchError        from "./fetch-error";
import fetchSuccess      from "./fetch-success";
import fetchTooManyCalls from "./fetch-too-many-calls";
import isFetchingData    from "./is-fetching-data";
import fetchComplete     from "./fetch-complete.js";

// API info for data request
let url       = "https://www.alphavantage.co/query?" + store.getState().userInteraction.assetType;
let apiKey    = "apikey=AAG3PU4MLMB9JHS3";

// Make api request
function fetchData(assetsName)
{
    return function(dispatch){
        // 1. Notify app of inital request
        dispatch(isFetchingData(true));

        // 2. Next, request data
        return Promise
                .all( assetsName.map( item => fetch( url + `symbol=${item}&` + apiKey).then(res => res.json())) )
                .then( allDataSets => {
                    // Create new array where we will store data after it's checked
                    let checkedData = [];

                    allDataSets.map( item => {
                        // Check each dataset and format accordingly
                        if(item["Error Message"])
                            checkedData.push( fetchError(item) );

                        if(item["Meta Data"])
                            checkedData.push( fetchSuccess(item) );

                        if(item["Information"])
                            checkedData.push( fetchTooManyCalls(item) );
                    });

                    // Finally, notify reducers and update state
                    dispatch(fetchComplete(checkedData));
                    dispatch(isFetchingData(false));
                });
    };
}

export default fetchData;
