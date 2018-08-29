import stockReducer from "../stock-reducer";

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

//test("test that state is updated correctly", () => {
//});

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