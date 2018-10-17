import resetDuplicateEntries       from "../resetDuplicateEntries.js";
import { RESET_DUPLICATE_ENTRIES } from "../../Constants/";

test("make sure an empty array is returned", () => {
    let { type, duplicateEntries } = resetDuplicateEntries();
    expect(type).toBe(RESET_DUPLICATE_ENTRIES);
    expect(duplicateEntries).toHaveLength(0);
});
