import store from "../store";

test("make sure default asset name is TSLA", () => {
    let defaultAssetName = "TSLA";
    let { assetName }    = store.getState();
    expect(assetName.assetName).toBe(defaultAssetName);
});

test("make sure default asset type is time series monthly adjusted", () => {
    let defaultAssetType = "function=TIME_SERIES_MONTHLY_ADJUSTED&";
    let { assetType }    = store.getState();
    expect(assetType.assetType).toBe(defaultAssetType);
});