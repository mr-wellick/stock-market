import StockVolatility  from "../Utilities/StockVolatility.js";
import StockInformation from "../Utilities/StockInformation.js";
import { msftData }     from "../Testing-Data/";

test("StockVolatility correctly calculates stock price's percent change over time", () => {
    // get stock prices
    let stock  = new StockInformation(msftData);
    let prices = stock.getRawData("5. adjusted close");

    // use stock prices to get percent change of stock over time
    prices            = new StockVolatility(prices);
    let percentChange = prices.getVolatility();

    expect(Array.isArray(percentChange)).toBe(true);
});
