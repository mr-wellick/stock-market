import { RESET_DATA_WARNINGS } from "../Constants/";

function resetWarnings()
{
    return {
        type: RESET_DATA_WARNINGS,
        manyCallsData: []
    };
}

export default resetWarnings;
