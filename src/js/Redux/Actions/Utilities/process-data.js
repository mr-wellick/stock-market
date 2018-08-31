function proccessData(assetData){
    // Process data into array
    let covertDataToArray = Object.entries(assetData);
    let newDataArray      = Object.entries(covertDataToArray[1][1]).reverse();

    // Get all Object properties from newDataArray
    // Create empty object to hold new properties
    let dataProperties          = Object.keys(newDataArray[1][1]);
    let newDataPropertiesObject = {};

    // Add dataProperties to newDataPropertiesObject
    dataProperties.forEach( item => newDataPropertiesObject[item] = [] );
    
    // Get all data corresponding to newDataPropertiesObject
    for(let i = 0; i < dataProperties.length; i++)
        for(let j = 0; j < newDataArray.length; j++)
        {
            newDataPropertiesObject[dataProperties[i]].push(
                newDataArray[j][1][dataProperties[i]]
            );
        }
    
    // Get asset name, keys, and dates
    let sybmol      = assetData["Meta Data"]["2. Symbol"];
    let newDataKeys = Object.keys(newDataPropertiesObject);
    let dates       = newDataArray.map( item => item[0]);

    // Add new entries to object
    newDataPropertiesObject["assetName"] = sybmol;
    newDataPropertiesObject["assetKeys"] = newDataKeys;
    newDataPropertiesObject["Dates"]     = dates;
    
    // Return new object with corresponding data
    return newDataPropertiesObject;
}

export default proccessData;