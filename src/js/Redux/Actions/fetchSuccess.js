import { FETCH_DATA_SUCCESS } from "../Constants/";
import { StockInformationExtractor }   from "./Utilities/";

function fetchSuccess(data)
{
    let rawData = new StockInformationExtractor(data);

    return {
        type: FETCH_DATA_SUCCESS,
        data: rawData.getProcessedStockData()
    };
}

export default fetchSuccess;
