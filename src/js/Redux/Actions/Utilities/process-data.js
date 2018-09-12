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
     *          "some date": { open, high, ... }
     *      }
     * }
     *
     */

    // Get base data
    let baseData = Object.entries(assetData);

    // Now get meta data and raw data
    let metaData = baseData[0][1];
    let rawData  = Object.entries(baseData[1][1]);

    // Get rawData properties
    let assetKeys = Object.keys(rawData[0][1]);

    // Create new object where we'll store new data
    let processedData = {};

    // Process raw data and store in each corresponding object property
    assetKeys.forEach(function passThroughEach(assetKey){
        processedData[assetKey] = rawData.map(function createNewArray(item){
            return Number(item[1][assetKey]).toFixed(2);
        });
    });

    // Now create new properties for dates, assetKeys, and percent change
    processedData["dates"]         = rawData.map( item => item[0] ).reverse();
    processedData["symbol"]        = metaData["2. Symbol"];
    processedData["percentChange"] = findPercentChange(processedData["5. adjusted close"]);

    // Return new object with corresponding data
    return processedData;
}

export default processData;
