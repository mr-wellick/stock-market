import { FETCH_DATA_SUCCESS } from "../Constants/";
import { StockInformation }   from "./Utilities/";

function fetchSuccess(data)
{
    let rawData = new StockInformation(data);

    return {
        type: FETCH_DATA_SUCCESS,
        data: rawData.getProcessedStockData()
    };
}

export default fetchSuccess;
