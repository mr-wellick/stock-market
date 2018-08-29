import { USER_INPUT } from "../Constants";

function userInputReducer(
    state = { assetName: "TSLA" },
    action
)
{
    switch(action.type)
    {
        case USER_INPUT:
            return Object.assign({}, state, {
                assetName: action.assetName
            });
        default:
            return state;
    }
}

export default userInputReducer;