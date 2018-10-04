import { FETCH_DATA_ERROR } from "../../Constants/";
import { errorData }        from "../Testing-Data/";
import fetchError           from "../fetchError.js";

test("fetchError properly processes data", () => {
    // process error data returned by api
    let processedData = fetchError(errorData);

    // check action creator returns correct object properties
    expect(processedData).toHaveProperty("type", FETCH_DATA_ERROR);
    expect(processedData).toHaveProperty("data");
    expect(processedData).toHaveProperty("message");
});
