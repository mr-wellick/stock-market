import userInput                         from "../userInput.js";
import { USER_ENTERED_DUPLICATE_STOCKS } from "../../Constants/";

test("make sure an array of stock entries is returned", () => {
    let stockEntries               = ["TSLA", "DJI", "AAPL"];
    let { type, duplicateEntries } = userInput(stockEntries);

    expect(type).toBe(USER_ENTERED_DUPLICATE_STOCKS);
    expect(duplicateEntries).toHaveLength(3);
});
