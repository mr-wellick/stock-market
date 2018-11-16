import successfulFetchRequest       from "./successfulFetchRequest.js";
//import failedFetchRequest           from "./failedFetchRequest.js";
import initiatedFetchRequest        from "./initiatedFetchRequest.js";

function fetchStockData(stockName)
{
    return function(dispatch){
        // 1. Begin request
        dispatch(initiatedFetchRequest(true));
        return fetch(`https://api.iextrading.com/1.0/stock/${stockName}/batch?types=quote,news,chart,company,stats`)
            .then(res => res.json())
            .then(data => {
                dispatch(successfulFetchRequest(data));
            })
            .then(() => dispatch(initiatedFetchRequest(false)));
    };
}

export default fetchStockData;