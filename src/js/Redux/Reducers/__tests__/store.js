import store from "../store";

test("make sure default asset names is [TSLA, KO, IBM, AAPL, NFLX]", () => {
    let defaultAssetNames   = ["TSLA", "KO", "IBM", "AAPL", "NFLX"];
    let { userInteraction } = store.getState();
    let{ assetNames }       = userInteraction;

    expect(assetNames).toContain(defaultAssetNames[0]);
    expect(assetNames).toContain(defaultAssetNames[1]);
    expect(assetNames).toContain(defaultAssetNames[2]);
    expect(assetNames).toContain(defaultAssetNames[3]);
    expect(assetNames).toContain(defaultAssetNames[4]);
});

test("make sure default asset type is time series monthly adjusted", () => {
    let defaultAssetType    = "function=TIME_SERIES_MONTHLY_ADJUSTED&";
    let { userInteraction } = store.getState();
    let { assetType }       = userInteraction;
    expect(assetType).toBe(defaultAssetType);
});
