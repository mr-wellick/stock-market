import { USER_DATA_TYPE_SELECTION } from "../Actions";
import { GET_USER_INPUT }           from "../Actions";

export function userSelect(dataType)
{
    return {
        type: USER_DATA_TYPE_SELECTION,
        dataType
    };
}

export function userInput(stockName)
{
    return {
        type: GET_USER_INPUT,
        stockName
    };
}
