import { FETCH_DATA_SUCCESS } from "../../Constants/";
import { msftData }           from "../Testing-Data/";
import fetchSuccess           from "../fetchSuccess.js";

test("successful data requests properly process data", () => {
    // process data returned by api
    let processedData = fetchSuccess(msftData);

    // check for properties on processedData
    expect(processedData).toHaveProperty("type", FETCH_DATA_SUCCESS);
    expect(processedData).toHaveProperty("data");
});
