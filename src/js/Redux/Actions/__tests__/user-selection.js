import userSelection      from "../user-selection.js";
import { USER_SELECTION } from "../../Constants";

/**
 ** Begin Tests
 **/
test("if user selects stock asset, return time series",() => {
    let selectionAction = userSelection(TIME_SERIES);
    let { assetType }   = selectionAction;
    expect(assetType).toBe(TIME_SERIES);
});

test("if user select cryptocurrency asset, return digital currency", () => {
    let selectionAction = userSelection(DIGITAL_CURRENCY);
    let { assetType }   = selectionAction;
    expect(assetType).toBe(DIGITAL_CURRENCY);
});

test("make sure correct action is returned by userSelection action-creator", () => {
    // Parameter for userSelection doesn't matter here. Just checking
    // that correct action type is logged.
    let selectionAction = userSelection(DIGITAL_CURRENCY);
    let { type }        = selectionAction;
    expect(type).toBe(USER_SELECTION);
});
/**
 ** End Tests
 **/

// Selection types
let TIME_SERIES      = "TIME_SERIES";
let DIGITAL_CURRENCY = "DIGITAL_CURRENCY";