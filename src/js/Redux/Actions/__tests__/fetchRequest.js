import { FETCH_DATA_REQUEST } from "../../Constants/";
import fetchRequest           from "../fetchRequest.js";

test("make sure fetchRequest returns correct object", () => {
    // set requesting to true
    let requesting = fetchRequest(true);

    // check correct object properties are produced
    expect(requesting).toHaveProperty("type", FETCH_DATA_REQUEST);
});
