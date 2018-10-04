import { FETCH_DATA_TOO_MANY_CALLS } from "../../Constants/";
import { tooManyCallsData }          from "../Testing-Data/";
import fetchManyCalls                from "../fetchManyCalls.js";

test("fetchManyCalls processes data correctly", () => {
    // processed data returned by api
    let processedData = fetchManyCalls(tooManyCallsData);

    // check processedData has correct object properties
    expect(processedData).toHaveProperty("type", FETCH_DATA_TOO_MANY_CALLS);
    expect(processedData).toHaveProperty("data");
    expect(processedData).toHaveProperty("message");
});
