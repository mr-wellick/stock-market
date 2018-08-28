import { USER_INPUT } from "../Constants";

function userInput(assetName)
{
    return {
        type: USER_INPUT,
        assetName
    };
}

export default userInput;