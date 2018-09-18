import { processData } from "../Utilities";
import { msftData }    from "../Testing-Data";

test("make sure data processData returns correct object", () => {

    let formattedData = processData(msftData);

    expect(formattedData).toHaveProperty("dates");
    expect(formattedData).toHaveProperty("symbol");
    expect(formattedData).toHaveProperty("adjustedClose");
    expect(formattedData).toHaveProperty("percentChange");
});
