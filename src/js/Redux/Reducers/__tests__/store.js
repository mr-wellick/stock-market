import store from "../store";

test("make sure default asset name is TSLA", () => {
    let defaultAssetName       = "TSLA";
    let { userInputReducer }   = store.getState();
    let { assetName }          = userInputReducer;
    expect(assetName).toBe(defaultAssetName);
});

test("make sure default asset type time series monthly adjusted", () => {
    let defaultAssetType         = "function=TIME_SERIES_MONTHLY_ADJUSTED&";
    let { userSelectionReducer } = store.getState();
    let { assetType }            = userSelectionReducer;
    expect(assetType).toBe(defaultAssetType);
});