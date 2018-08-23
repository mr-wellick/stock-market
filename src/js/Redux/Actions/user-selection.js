import { USER_SELECTION } from "../Constants";

function determine(assetType)
{
    return {
        type: USER_SELECTION,
        assetType
    }
}

export default determine;