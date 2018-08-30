import stockReducer      from "../stock-reducer";
import { userInput }     from "../../Actions";
import { userSelection } from "../../Actions";

// Test default case
test("test initial asset name is TSLA", () => {
    let name                = "TSLA";
    let nextState           = stockReducer(initialState, incorrectAction);
    let { userInteraction } = nextState;
    let { assetName }       = userInteraction;
    expect(assetName).toBe(name);
});

test("test initial asset type to be monthly adjusted", () => {
    let type                = "function=TIME_SERIES_MONTHLY_ADJUSTED&";
    let nextState           = stockReducer(initialState, incorrectAction);
    let { userInteraction } = nextState;
    let { assetType }       = userInteraction;
    expect(assetType).toBe(type);
});

// Test USER_INPUT case
test("test user input action updates asset name", () => {
    let newAssetName        = "AAPL";
    let correctAction       = userInput("AAPL");
    let nextState           = stockReducer(initialState, correctAction);
    let { userInteraction } = nextState;
    let { assetName }       = userInteraction;
    expect(assetName).toBe(newAssetName);
});

// Test USER_SELECTION  case
test("test user selection action updates asset type", () => {
    let newAssetType        = "function=TIME_SERIES_DAILY_ADJUSTED&";
    let correctAction       = userSelection(newAssetType);
    let nextState           = stockReducer(initialState, correctAction);
    let { userInteraction } = nextState;
    let { assetType }       = userInteraction;
    expect(assetType).toBe(newAssetType);
});

// Helpers
let initialState = {
    userInteraction: {
        assetName: "TSLA",
        assetType: "function=TIME_SERIES_MONTHLY_ADJUSTED&"
    }
};

let incorrectAction = {
    type: "INCORRECT_ACTION",
    assetName: "APPL"
};