import StockInformation from "../Utilities/StockInformation.js";
import { msftData }     from "../Testing-Data/";

test("StockInformation constructor initializes correct member variables", () => {
    let processedData = new StockInformation(msftData);

    expect(processedData).toHaveProperty("baseData");
    expect(processedData).toHaveProperty("metaData");
    expect(processedData).toHaveProperty("rawData");
});

test("StockInformation getProcessedStockData() method returns correct object properties", () => {
    let data          = new StockInformation(msftData);
    let processedData = data.getProcessedStockData();

    expect(processedData).toHaveProperty("adjustedClose");
    expect(processedData).toHaveProperty("dates");
    expect(processedData).toHaveProperty("high");
    expect(processedData).toHaveProperty("low");
    expect(processedData).toHaveProperty("open");
    expect(processedData).toHaveProperty("percentChange");
    expect(processedData).toHaveProperty("stockName");
});
