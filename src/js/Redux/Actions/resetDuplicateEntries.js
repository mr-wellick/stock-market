import { RESET_DUPLICATE_ENTRIES } from "../Constants/";

function resetDuplicateEntries()
{
    return {
        type: RESET_DUPLICATE_ENTRIES,
        duplicateEntries: ""
    };
}

export default resetDuplicateEntries;
