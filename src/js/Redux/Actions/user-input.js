import { USER_INPUT } from "../Constants";

function userInput(assetNames)
{
    return {
        type: USER_INPUT,
        assetNames
    };
}

export default userInput;
