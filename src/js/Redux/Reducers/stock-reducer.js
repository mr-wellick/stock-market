import { USER_INPUT }     from "../Constants";
import { USER_SELECTION } from "../Constants";

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
                // remove user interaction propperty and update tests
                userInteraction: {
                    ...state.userInteraction,
                    assetName: action.assetName
                }
            });
        case USER_SELECTION:
            return Object.assign({}, state, {
                userInteraction: {
                    ...state.userInteraction,
                    assetType: action.assetType
                }
            });
        default:
            return state;
    }
}

export default stockReducer;