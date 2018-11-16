import successfulFetchRequest       from "./successfulFetchRequest.js";
//import failedFetchRequest           from "./failedFetchRequest.js";
import initiatedFetchRequest        from "./initiatedFetchRequest.js";

function fetchStockData(stockName)
{
    return async function(dispatch){
        // 1. Begin request
        dispatch(initiatedFetchRequest(true));

        // 2. Fetch Data
        const res = await fetch(
            `https://api.iextrading.com/1.0/stock/${stockName}/batch?types=quote,news,company,stats,chart&range=5y`
        );
        const data = await res.json();

        // 3. Handle Success/Errors
        dispatch(successfulFetchRequest(data));

        // 4. End request
        return dispatch(initiatedFetchRequest(false));
    };
}

export default fetchStockData;
