import { USER_DATA_TYPE_SELECTION } from "../Actions";
import { GET_USER_INPUT }           from "../Actions";
import { FETCH_DATA }               from "../Actions";
import { ERROR_ON_FETCH_DATA }      from "../Actions";
import { store }                    from "../Reducers";
import { findPercentChange }        from "../../Views/Home/Utilities";

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
    let stockOrCrypto = false;

    if(type === "TIME_SERIES")
        symbol = `symbol=${stockName}&`;
    else
    {
        symbol        = `symbol=${stockName}&market=USD&`;
        stockOrCrypto = true;
    }

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
                            let processData = Object.entries(checkData[1][1]).reverse();

                            // Check for stock or crypto data
                            if(stockOrCrypto)
                                dispatch(receivedCrypto(processData));
                            else
                                dispatch(receivedData(processData));

                            // reset stock-or-crypto tracker
                            stockOrCrypto = false;
                        }
                    });
    };
}

function receivedCrypto(stockData)
{
    return {
        type: FETCH_DATA,
        stockData,
        dates:         stockData.map(item => item[0]),
        open:          stockData.map( item => Number(item[1]["1a. open (USD)"]).toFixed(2)),
        high:          stockData.map( item => Number(item[1]["2a. high (USD)"]).toFixed(2)),
        low:           stockData.map( item => Number(item[1]["3a. low (USD)"]).toFixed(2)),
        close:         stockData.map( item => Number(item[1]["4a. close (USD)"]).toFixed(2)),
        adjustedClose: [],
        percentChange: findPercentChange(stockData.map( item => Number(item[1]["4a. close (USD)"]).toFixed(2) )),
        error: false,
        errorMessage: ""
    };
}


function receivedData(stockData)
{
    return {
        type: FETCH_DATA,
        stockData,
        dates:         stockData.map(item => item[0]),
        open:          stockData.map( item => Number(item[1]["1. open"]).toFixed(2) ),
        high:          stockData.map( item => Number(item[1]["2. high"]).toFixed(2) ),
        low:           stockData.map( item => Number(item[1]["3. low"]).toFixed(2) ),
        close:         stockData.map( item => Number(item[1]["4. close"]).toFixed(2) ),
        adjustedClose: stockData.map( item => Number(item[1]["5. adjusted close"]).toFixed(2) ),
        percentChange: findPercentChange(stockData.map( item => Number(item[1]["5. adjusted close"]).toFixed(2))),
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
