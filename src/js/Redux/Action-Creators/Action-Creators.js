import { USER_DATA_TYPE_SELECTION } from "../Actions";
import { GET_USER_INPUT }           from "../Actions";
import { FETCH_DATA }               from "../Actions";
import { ERROR_ON_FETCH_DATA }      from "../Actions";
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
                    .then( checkData => {
                        // Check for valid data
                        if(checkData[0][0] === "Error Message")
                            dispatch(errorOnDataRetrieval(checkData));
                        else
                        {
                            let processData = Object.entries(checkData[1][1]);
                            dispatch(receivedData(processData));
                        }
                    });
    };
}

function receivedData(stockData)
{
    return {
        type: FETCH_DATA,
        stockData,
        dates: stockData.map(item => item[0]),
        open: stockData.map( item => item[1]["1. open"] ),
        high: stockData.map( item => item[1]["2. high"] ),
        low: stockData.map( item => item[1]["3. low"] ),
        close: stockData.map( item => item[1]["4. close"] ),
        adjustedClose: stockData.map( item => item[1]["5. adjusted close"] ),
        percentChange: [],
        error: false,
        errorMessage: ""
    };
}

function errorOnDataRetrieval(stockData)
{
    return {
        type: ERROR_ON_FETCH_DATA,
        stockData: stockData,
        error: true,
        errorMessage: stockData[0][1]
    };
}
