import { USER_INPUT } from "../Constants";

function retrieve(assetName)
{
    return {
        type: USER_INPUT,
        assetName
    };
}

export default retrieve;