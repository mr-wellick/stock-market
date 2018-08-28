import { FETCH }         from "../Constants";
import { FETCH_SUCCESS } from "../Constants";
import { FETCH_ERROR }   from "../Constants";

// api stuff
const url    = "https://www.alphavantage.co/query?";
const apiKey = "apikey=AAG3PU4MLMB9JHS3";

function fetchSuccess(data)
{
    return {
        type: FETCH_SUCCESS,
        rawData: data
    };
}

function fetchError(data)
{
    return {
        type: FETCH_ERROR,
        rawData: data
    };
}

function fetchAPIData()
{
}