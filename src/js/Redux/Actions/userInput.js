import { USER_ENTERED_DUPLICATE_STOCKS } from "../Constants/";

function userInput(duplicateEntries)
{
    return {
        type: USER_ENTERED_DUPLICATE_STOCKS,
        duplicateEntries
    };
}

export default userInput;
