import determine from "../user-selection.js";

/**
 ** Begin Tests
 **/
test("if user selects stock asset, return time series",() => {
    let selectionAction = determine(TIME_SERIES);
    let { assetType }   = selectionAction;
    expect(assetType).toBe(TIME_SERIES);
});

test("if user select cryptocurrency asset, return digital currency", () => {
    let selectionAction = determine(DIGITAL_CURRENCY);
    let { assetType }   = selectionAction;
    expect(assetType).toBe(DIGITAL_CURRENCY);
});
/**
 ** End Tests
 **/

// Selection types
let TIME_SERIES      = "TIME_SERIES";
let DIGITAL_CURRENCY = "DIGITAL_CURRENCY";