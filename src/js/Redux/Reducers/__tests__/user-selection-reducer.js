import userSelectionReducer from "../user-selection-reducer";
import { USER_SELECTION }   from "../../Constants";

/**
 ** Begin Test
 **/
test("when correct action is generated, update state", () => {
    let correctAction = actionCreator(USER_SELECTION, DIGITAL_CURRENCY);
    let nextState     = userSelectionReducer(initialState, correctAction);
    let { assetType } = nextState;
    expect(assetType).toBe(DIGITAL_CURRENCY);
});

test("when an incorrect action is generated, return default state", () => {
    let incorrectAction = actionCreator("AN_INCORRECT_ACTION", DIGITAL_CURRENCY);
    let nextState       = userSelectionReducer(initialState, incorrectAction);
    let { assetType }   = nextState;
    expect(assetType).toBe(TIME_SERIES);
});


/**
 ** End Test
 **/

// Default state
let initialState = {
    assetType: "TIME_SERIES"
};

// Generic action creator
function actionCreator(action, assetType)
{
    return {
        type: action,
        assetType
    }
}

// Use cases for assetType
let TIME_SERIES      = "TIME_SERIES";
let DIGITAL_CURRENCY = "DIGITAL_CURRENCY";