import fetchComplete         from "./fetchComplete.js";
import fetchError            from "./fetchError.js";
import fetchSuccess          from "./fetchSuccess.js";
import fetchManyCalls        from "./fetchManyCalls.js";
import fetchRequest          from "./fetchRequest.js";
import resetDuplicateEntries from "./resetDuplicateEntries.js";
import robinhoodComplete     from "./robinhoodComplete.js";

function fetchData(stockNames)
{
    return function(dispatch){
        // begin request
        dispatch(fetchRequest(true));
        dispatch(resetDuplicateEntries()); // to keep the ui consistent
        return(
            // iterate through each stock and request
            Promise.all(
                stockNames.map(stock =>
                    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stock}&apikey=${process.env.API_KEY}`)
                        .then(res => res.json())
                )
            )
            // process data accordingly
            .then(allStockData => {
                // will store data in new array
                let processedData = [];

                // check data
                allStockData.map(data => {
                    if(data["Meta Data"])
                        processedData.push(fetchSuccess(data));
                    if(data["Error Message"])
                        processedData.push(fetchError(data));
                    if(data["Note"])
                        processedData.push(fetchManyCalls(data));
                });

                    // get all successful api calls
                    let successfulCalls = processedData.filter(item => item["type"] === "FETCH_DATA_SUCCESS");
                    let stockNames      = successfulCalls.map( item => item["data"]["stockName"]);

                    // only call if we have correct stock entries
                    if(stockNames.length > 0)
                    {
                        // get robinhood data
                        fetch(`https://api.robinhood.com/fundamentals/?symbols=${stockNames}`)
                            .then(res => res.json())
                            .then(data => {
                                dispatch(robinhoodComplete(data.results));
                            }); 
                    }
                    // end request
                    dispatch(fetchComplete(processedData));
                    dispatch(fetchRequest(false));
            })
        );
    };
}

export default fetchData;