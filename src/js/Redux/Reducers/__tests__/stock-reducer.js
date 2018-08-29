import stockReducer   from "../stock-reducer";
import { USER_INPUT } from "../../Constants";
import { userInput }  from "../../Actions";

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

test("test user input action updates asset name", () => {
    let newAssetName        = "AAPL";
    let correctAction       = userInput("AAPL");
    let nextState           = stockReducer(initialState, correctAction);
    let { userInteraction } = nextState;
    let { assetName }       = userInteraction;
    expect(assetName).toBe(newAssetName);
});

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