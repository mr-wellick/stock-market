import { store }      from "../../Reducers";
import fetchError     from "./fetch-error";
import fetchSuccess   from "./fetch-success";
import isFetchingData from "./is-fetching-data";

// API info for data request
let url    = "https://www.alphavantage.co/query?";
let apiKey = "apikey=AAG3PU4MLMB9JHS3";

// Make api request
function fetchData(assetName)
{
    // Get asset type request: monthly or daily.
    // Symbol used for either stocks or cryptocurrency
    let assetType = store.getState().userInteraction.userInteraction.assetType;
    let symbol    = `symbol=${assetName}&`;

    // Full url to use in request
    let fullURL = url + assetType + symbol + apiKey;

    return function(dispatch){
        dispatch(isFetchingData());
        // 1. Next, request data
        return fetch(fullURL).then(res => res.json())
                      .then(data => {
                        // 2. Dispatch error or success
                        if(data["Error Message"])
                            dispatch(fetchError(data));
                        else
                            dispatch(fetchSuccess(data));
                    });
    };
}

export default fetchData;