import findPercentChange from "./find-percent-change.js";

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
    let adjustedClose = rawData.map( price => price[1]["5. adjusted close"] ).reverse();
    let percentChange = findPercentChange(adjustedClose);

    // Store all data in new object
    let processedData = {
        symbol,
        dates,
        adjustedClose,
        percentChange
    };

    return processedData;
}

export default processData;
