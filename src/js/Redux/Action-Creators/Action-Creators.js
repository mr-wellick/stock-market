import { USER_DATA_TYPE_SELECTION } from "../Actions";
import { GET_USER_INPUT }           from "../Actions";
import { FETCH_DATA }               from "../Actions";
import { store }                    from "../Reducers";

// api stuff
const url    = "https://www.alphavantage.co/query?";
const apiKey = "apikey=AAG3PU4MLMB9JHS3";

export function userSelect(dataType)
{
    return {
        type: USER_DATA_TYPE_SELECTION,
        dataType
    };
}

function userInput(stockName)
{
    return {
        type: GET_USER_INPUT,
        stockName
    };
}

// New Creators
export function fetchData(stockName)
{
    let type = store.getState().dataType.dataType.substring(9, 20);
    let fun  = store.getState().dataType.dataType;
    let symbol;

    if(type === "TIME_SERIES")
        symbol = `symbol=${stockName}&`;
    else
        symbol = `symbol=${stockName}&market=USD&`;

    return function(dispatch){
        dispatch(userInput(stockName));
        return fetch( url + fun + symbol + apiKey )
                    .then(res => res.json())
                    .then(data => Object.entries(data))
                    .then(data => dispatch(receivedData(data)));
    };
}

function receivedData(stockData)
{
    return {
        type: FETCH_DATA,
        stockData
    };
}
