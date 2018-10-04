function fetchData(stockNames)
{
    // get asset type to request: monthly or daily
    let assetType;

    return function(dispatch){
        // begin request
        return(
            // iterate through each stock and request
            Promise.all(
                stockNames.map(stock =>
                    fetch(`https://www.alphavantage.co/query?${assetType}symbol=${stock}&apikey=${process.env.API_KEY}`)
                    .then(res => res.json())
                )
            )
            // process data accordingly
            .then(allStockData => {
                console.log(allStockData);
            })
            // end request
        );
    };
}

export default fetchData;
