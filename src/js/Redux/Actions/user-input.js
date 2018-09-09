import { USER_INPUT } from "../Constants";

function userInput(assetsName)
{
    return {
        type: USER_INPUT,
        assetsName
    };
}

export default userInput;
