import { fetchSuccess }  from "../Fetch-Data";
import { msftData }      from "../Fetch-Data";
import { FETCH_SUCCESS } from "../../Constants";

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