import userInteractionReducer from "../user-interaction-reducer.js";
import { userInput }          from "../../Actions";
import { userSelection }      from "../../Actions";

test("test default case returns the following assetsName: [TSLA, KO, IBM, AAPL, NFLX]", () => {
    let defaultNames   = ["TSLA", "KO", "IBM", "AAPL", "NFLX"];
    let nextState      = userInteractionReducer(initialState, incorrectAction);
    let { assetNames } = nextState;

    expect(assetNames).toContain(defaultNames[0]);
    expect(assetNames).toContain(defaultNames[1]);
    expect(assetNames).toContain(defaultNames[2]);
    expect(assetNames).toContain(defaultNames[3]);
    expect(assetNames).toContain(defaultNames[4]);
});

test("test default asset type to be monthly adjusted", () => {
    let type          = "function=TIME_SERIES_MONTHLY_ADJUSTED&";
    let nextState     = userInteractionReducer(initialState, incorrectAction);
    let { assetType } = nextState;

    expect(assetType).toBe(type);
});

test("test user input action updates asset names", () => {
    let newAssetNames  = ["AAPL", "KO", "IBM"];
    let correctAction  = userInput(newAssetNames);
    let nextState      = userInteractionReducer(initialState, correctAction);
    let { assetNames } = nextState;

    expect(assetNames).toContain(newAssetNames[0]);
    expect(assetNames).toContain(newAssetNames[1]);
    expect(assetNames).toContain(newAssetNames[2]);
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
    assetNames: ["TSLA", "KO", "IBM", "AAPL", "NFLX"],
    assetType: "function=TIME_SERIES_MONTHLY_ADJUSTED&"
};

let incorrectAction = {
    type: "INCORRECT_ACTION",
    assetNames: "APPL"
};
