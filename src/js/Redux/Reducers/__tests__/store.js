import store from "../store";

test("make sure default asset name is TSLA", () => {
    let defaultAssetName    = "TSLA";
    let { userInteraction } = store.getState();
    let{ assetName }        = userInteraction.userInteraction;
    expect(assetName).toBe(defaultAssetName);
});

test("make sure default asset type is time series monthly adjusted", () => {
    let defaultAssetType    = "function=TIME_SERIES_MONTHLY_ADJUSTED&";
    let { userInteraction } = store.getState();
    let { assetType }       = userInteraction.userInteraction;
    expect(assetType).toBe(defaultAssetType);
});