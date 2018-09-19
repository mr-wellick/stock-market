import fetchTooManyCalls        from "../fetch-too-many-calls.js";
import { FETCH_TOO_MANY_CALLS } from "../../Constants/";

test("for too many calls being made", () => {

    let actionObject = fetchTooManyCalls(apiMessage);

    expect(actionObject).toHaveProperty("type", FETCH_TOO_MANY_CALLS);
    expect(actionObject).toHaveProperty("assetData", apiMessage);
    expect(actionObject).toHaveProperty("errorMessage", customErrorMessage);
});

// The data returned for this action is an object: { Information: "Some message about too many api calls." }
let apiMessage = {
    Information: "Some message about making too many api calls."
};

// We override our apiMessage with this custom message.
let customErrorMessage = "You have exceeded the call limit. Please wait a few seconds and try again.";
