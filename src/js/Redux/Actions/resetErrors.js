import { RESET_DATA_ERRORS } from "../Constants/";

function resetErrors()
{
    return {
        type: RESET_DATA_ERRORS,
        errorData: []
    };
}

export default resetErrors;
