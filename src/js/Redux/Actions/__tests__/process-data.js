import { processData } from "../Utilities";
import { msftData }    from "../Testing-Data";

test("make sure data processData returns correct object", () => {

    let formattedData = processData(msftData);

    expect(formattedData).toHaveProperty("dates");
    expect(formattedData).toHaveProperty("symbol");
});

// Note: can't use string vaule "1. open."
//       Although string value is a valid property, we get an error message.
