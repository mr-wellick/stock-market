import fetchComplete   from "../fetch-complete.js";
import { FETCH_COMPLETE } from "../../Constants";
import fetchSuccess    from "../fetch-success.js";
import fetchError      from "../fetch-error.js";
import { msftData }    from "../Testing-Data";
import { errorData }   from "../Testing-Data";


test("need to refactor fetch complete", () => {
    let successApiCall = fetchSuccess(msftData);
    let errorApiCall   = fetchError(errorData);
    let dataArray      = [ successApiCall, errorApiCall ]; // Need an array since that's how our final data is stored
    let dataToDispatch = fetchComplete(dataArray);

    expect(dataToDispatch).toHaveProperty("type", FETCH_COMPLETE);
    expect(dataToDispatch).toHaveProperty("successData");
    expect(dataToDispatch).toHaveProperty("errorData");
    expect(dataToDispatch).toHaveProperty("tooManyCallsData");
});
