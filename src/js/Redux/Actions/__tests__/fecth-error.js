import { FETCH_ERROR } from "../../Constants";
import { errorData }   from "../Testing-Data";
import  fetchError     from "../fetch-error";

// Need to add more tests
test("make sure fetch error returns correct object properties", () => {
    // User error data returned by api
    let errorAction = fetchError(errorData);

    // Check correct properties are generated
    expect(errorAction).toHaveProperty("type", FETCH_ERROR);
    expect(errorAction).toHaveProperty("assetData");
    expect(errorAction).toHaveProperty("error", true);
    expect(errorAction).toHaveProperty("errorMessage");
    expect(errorAction).toHaveProperty("processedData");
});
