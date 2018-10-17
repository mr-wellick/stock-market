import resetWarnings           from "../resetWarnings.js";
import { RESET_DATA_WARNINGS } from "../../Constants/";

test("make sure an empty array is returned", () => {
    let { type, manyCallsData } = resetWarnings();
    expect(type).toBe(RESET_DATA_WARNINGS);
    expect(manyCallsData).toHaveLength(0);
});
