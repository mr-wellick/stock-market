import { FETCH_ROBINHOOD_DATA } from "../Constants/";

function robinhoodComplete(robinhoodData)
{
    return {
        type: FETCH_ROBINHOOD_DATA,
        robinhoodData
    };
}

export default robinhoodComplete;