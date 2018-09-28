import { ENTERED_DUPLICATE_STOCKS } from "../Constants";

function enteredDuplicateStocks(duplicateStocks)
{
    return {
        type: ENTERED_DUPLICATE_STOCKS,
        duplicateStocks
    };
}

export default enteredDuplicateStocks;