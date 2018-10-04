import { FETCH_DATA_SUCCESS } from "../Constants/";
import { processData }        from "./Utilities/";

function fetchSuccess(data)
{
    return {
        type: FETCH_DATA_SUCCESS,
        data: processData(data)
    };
}

export default fetchSuccess;
