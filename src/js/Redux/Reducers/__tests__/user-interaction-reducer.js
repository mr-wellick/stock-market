import userInteractionReducer from "../user-interaction-reducer.js";
import { userInput }     from "../../Actions";
import { userSelection } from "../../Actions";

test("test default case returns the following assetsName: [TSLA, KO, IBM, AAPL, NFLX]", () => {
    let defaultNames   = ["TSLA", "KO", "IBM", "AAPL", "NFLX"];
    let nextState      = userInteractionReducer(initialState, incorrectAction);
    let { assetsName } = nextState;

    expect(assetsName).toContain(defaultNames[0]);
    expect(assetsName).toContain(defaultNames[1]);
    expect(assetsName).toContain(defaultNames[2]);
    expect(assetsName).toContain(defaultNames[3]);
    expect(assetsName).toContain(defaultNames[4]);
});

test("test default asset type to be monthly adjusted", () => {
    let type          = "function=TIME_SERIES_MONTHLY_ADJUSTED&";
    let nextState     = userInteractionReducer(initialState, incorrectAction);
    let { assetType } = nextState;

    expect(assetType).toBe(type);
});

test("test user input action updates assets name", () => {
    let newAssetNames  = ["AAPL", "KO", "IBM"];
    let correctAction  = userInput(newAssetNames);
    let nextState      = userInteractionReducer(initialState, correctAction);
    let { assetsName } = nextState;

    expect(assetsName).toContain(newAssetNames[0]);
    expect(assetsName).toContain(newAssetNames[1]);
    expect(assetsName).toContain(newAssetNames[2]);
});

test("test user selection action updates asset type", () => {
    let newAssetType  = "function=TIME_SERIES_DAILY_ADJUSTED&";
    let correctAction = userSelection(newAssetType);
    let nextState     = userInteractionReducer(initialState, correctAction);
    let { assetType } = nextState;

    expect(assetType).toBe(newAssetType);
});

// Helpers
let initialState = {
    assetsName: ["TSLA", "KO", "IBM", "AAPL", "NFLX"],
    assetType: "function=TIME_SERIES_MONTHLY_ADJUSTED&"
};

let incorrectAction = {
    type: "INCORRECT_ACTION",
    assetsName: "APPL"
};
