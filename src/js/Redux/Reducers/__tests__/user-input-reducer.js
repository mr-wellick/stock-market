import userInputReducer from "../user-input-reducer.js";
import { USER_INPUT }   from "../../Constants";

test("when correct action is generated, update state", () => {
    let correctAction  = actionCreator(USER_INPUT, "AAPL");
    let nextState      = userInputReducer(initialState, correctAction);
    let { assetName }  = nextState;
    expect(assetName).toBe("AAPL");
});

test("when an incorrect action is generated, return default state", () => {
    let incorrectAction = actionCreator("AN_INCORRECT_ACTION", "IBM");
    let nextState       = userInputReducer(initialState, incorrectAction);
    let { assetName }   = nextState;
    expect(assetName).toBe("TSLA");
});

// Default state
let initialState = {
    assetName: "TSLA"
};

// Generic action creator
function actionCreator(action, assetName)
{
    return {
        type: action,
        assetName
    };
}
