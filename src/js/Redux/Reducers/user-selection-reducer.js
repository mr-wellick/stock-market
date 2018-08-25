import { USER_SELECTION } from "../Constants";

function userSelectionReducer(state, action)
{
    switch(action.type)
    {
        case USER_SELECTION:
            return Object.assign({}, state, {
                assetType: action.assetType
            });
        default:
            return state;
    }
}

export default userSelectionReducer;
