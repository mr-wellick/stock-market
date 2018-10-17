//import { FETCH_DATA_COMPLETE }       from "../../Constants/";
//import { msftData }                  from "../Testing-Data/";
//import { tooManyCallsData }          from "../Testing-Data/";
//import { errorData }                 from "../Testing-Data/";
//import fetchComplete                 from "../fetchComplete.js";
//import fetchError                    from "../fetchError.js";
//import fetchSuccess                  from "../fetchSuccess.js";
//import fetchManyCalls                from "../fetchManyCalls.js";
//
//test("fetchComplete processes data correctly", () => {
//    // process each data result return by api
//    let error       = fetchError(errorData);
//    let success     = fetchSuccess(msftData);
//    let manyCalls   = fetchManyCalls(tooManyCallsData);
//    let arrayOfData = [error, success, manyCalls];
//
//    // process data with fetchComplete
//    let processedData = fetchComplete(arrayOfData);
//    expect(processedData).toHaveProperty("type", FETCH_DATA_COMPLETE);
//    expect(processedData).toHaveProperty("successData");
//    expect(processedData).toHaveProperty("errorData");
//    expect(processedData).toHaveProperty("manyCallsData");
//});
