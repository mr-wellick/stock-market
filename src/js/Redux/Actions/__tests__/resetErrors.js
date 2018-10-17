import resetErrors           from "../resetErrors.js";
import { RESET_DATA_ERRORS } from "../../Constants/";

test("make sure an empty array is returned", () => {
    let { type, errorData } = resetErrors();
    expect(type).toBe(RESET_DATA_ERRORS);
    expect(errorData).toHaveLength(0);
});
