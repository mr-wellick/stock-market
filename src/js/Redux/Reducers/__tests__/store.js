import store from "../store";

test("make sure default asset names is [TSLA, KO, IBM, AAPL, NFLX]", () => {
    let defaultAssetsName   = ["TSLA", "KO", "IBM", "AAPL", "NFLX"];
    let { userInteraction } = store.getState();
    let{ assetsName }       = userInteraction;

    expect(assetsName).toContain(defaultAssetsName[0]);
    expect(assetsName).toContain(defaultAssetsName[1]);
    expect(assetsName).toContain(defaultAssetsName[2]);
    expect(assetsName).toContain(defaultAssetsName[3]);
    expect(assetsName).toContain(defaultAssetsName[4]);
});

test("make sure default asset type is time series monthly adjusted", () => {
    let defaultAssetType    = "function=TIME_SERIES_MONTHLY_ADJUSTED&";
    let { userInteraction } = store.getState();
    let { assetType }       = userInteraction;
    expect(assetType).toBe(defaultAssetType);
});
