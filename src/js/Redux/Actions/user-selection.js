import { USER_SELECTION } from "../Constants";

function userSelection(assetType)
{
    return {
        type: USER_SELECTION,
        assetType
    }
}

export default userSelection;