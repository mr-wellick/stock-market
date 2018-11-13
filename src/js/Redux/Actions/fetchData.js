import fetchError            from "./fetchError.js";
import fetchSuccess          from "./fetchSuccess.js";
import fetchManyCalls        from "./fetchManyCalls.js";
import fetchRequest          from "./fetchRequest.js";
import resetDuplicateEntries from "./resetDuplicateEntries.js";
import robinhoodComplete     from "./robinhoodComplete.js";

function fetchAlphaVantageData(stockName)
{
    return fetch(
        `https://www.alphavantage.co/query?function=time_series_monthly_adjusted&symbol=${stockName}&apikey=${
            process.env.api_key
        }`
    ).then(res => res.json());
}

function fetchRobinHoodData(stockName)
{
    return fetch(
        `https://api.robinhood.com/fundamentals/?symbols=${stockName}`
    ).then(res => res.json());
}

function fetchData(stockName)
{
    return function(dispatch) {
        // begin request
        dispatch(fetchRequest(true));
        dispatch(resetDuplicateEntries()); // to keep the ui consistent
        // 1. Fetch data from Alpha Vantange
        return fetchAlphaVantageData(stockName)
                    .then(data => {
                        if(data["Meta Data"])
                            dispatch(fetchSuccess(data));
                        if(data["Error Message"])
                            dispatch(fetchError(data));
                        if(data["Note"])
                            dispatch(fetchManyCalls(data));
                    })
                    .then(() => {
                        // 2. Fetch data from Robinhood
                        fetchRobinHoodData(stockName)
                            .then(data => {
                                if(data.results)
                                    dispatch(robinhoodComplete(data.results));
                            })
                            // end request
                            .then(() => dispatch(fetchRequest(false)));
                    });
    };
}

export default fetchData;
