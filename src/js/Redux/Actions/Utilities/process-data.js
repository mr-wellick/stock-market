import MonthlyStockPrices from "./MonthlyStockPrices.js";


function processData(assetData){

    /*
     * Incoming assetData is of the form:
     *
     * {
     *
     *   "Meta Data": { info, symbol, ... }
     *   "Time Series ( Daily or Monthly )":
     *      {
     *          "some date": { open, high, ... },
     *          "some date": { open, high, ... },
     *           ...
     *      }
     * }
     *
     */

    // Get base data
    let baseData = Object.entries(assetData);
    let metaData = baseData[0][1];
    let rawData  = Object.entries(baseData[1][1]);

    // Extract data to use
    let symbol        = metaData["2. Symbol"];
    let dates         = rawData.map( date => date[0] );
    let open          = rawData.map( open => open[1]["1. open"] );
    let high          = rawData.map( high => high[1]["2. high"] );
    let low           = rawData.map( low => low[1]["3. low"] );
    let adjustedClose = rawData.map( price => price[1]["5. adjusted close"] ).reverse();
    let prices        = new MonthlyStockPrices(adjustedClose);
    let percentChange = prices.findPercentChange();

    // Store all data in new object
    let newData = {
        symbol,
        dates,
        adjustedClose,
        percentChange,
        open,
        high,
        low
    };

    return newData;
}

export default processData;