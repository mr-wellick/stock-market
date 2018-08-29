import { USER_INPUT }     from "../Constants";
//import { USER_SELECTION } from "../Constants";

function stockReducer(
    state = {
        userInteraction: {
            assetName: "TSLA",
            assetType: "function=TIME_SERIES_MONTHLY_ADJUSTED&"
        }
    },
    action
)
{
    switch(action.type)
    {
        case USER_INPUT:
            return Object.assign({}, state, {
                userInteraction: {
                    ...state.userInteraction,
                    assetName: action.assetName
                }
            });
        default:
            return state;
    }
}

export default stockReducer;