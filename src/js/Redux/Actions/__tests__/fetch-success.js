import { FETCH_SUCCESS } from "../../Constants";
import { msftData }      from "../Testing-Data";
import  fetchSuccess     from "../fetch-success";

test("test correct action object is created for fetch success", () => {
    // Data returned by api processed by fetch-success action creator
    let processedData = fetchSuccess(msftData);

    // Check properties exist
    expect(processedData).toHaveProperty("type", FETCH_SUCCESS);
    expect(processedData).toHaveProperty("assetData");
    expect(processedData).toHaveProperty("error", false);
    expect(processedData).toHaveProperty("errorMessage", "");
    expect(processedData).toHaveProperty("processedData");
});