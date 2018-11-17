import successfulFetchRequest from "./successfulFetchRequest.js";
import failedFetchRequest     from "./failedFetchRequest.js";
import initiatedFetchRequest  from "./initiatedFetchRequest.js";

function fetchStockData(stockName)
{
    return async function(dispatch) {
        // 1. Begin request
        dispatch(initiatedFetchRequest(true));

        // 2. Fetch Data
        const res = await fetch(
            `https://api.iextrading.com/1.0/stock/${
                stockName
            }/batch?types=quote,news,company,stats,financials,relevant,chart&range=5y`
        );

        // 3. Handle Success/Errors
        try
        {
            const data = await res.json();
            dispatch(successfulFetchRequest(data));
        }
        catch(error)
        {
            dispatch(failedFetchRequest(`You entered an incorrect stock, ${stockName}.`));
        }

        // 4. End request
        return dispatch(initiatedFetchRequest(false));
    };
}

export default fetchStockData;
