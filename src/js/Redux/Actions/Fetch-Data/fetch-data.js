//import { store }   from "../../Reducers";
import userInput  from "../user-input";
import fetchError from "./fetch-error";
import  fetchSuccess from "./fetch-success";
//let url    = "https://www.alphavantage.co/query?";
//let symbol = `symbol${assetName}&`
//let apiKey = "apikey=AAG3PU4MLMB9JHS3";

// Make api request
function fetchData(assetName)
{
    // Get asset type request: monthly or daily.
    //let assetType = store.getState();

    return function(dispatch){

        // 1. First Dispatch user input
        dispatch(userInput(assetName));

        //2. Next, request data
        return fetch().then(res => res.json())
                      .then(data => Object.entries(data))
                      .then(data => {
                        // 3. Dispatch error or success
                        if(data[0][1] === "Error Message")
                            dispatch(fetchError(data));
                        else
                            dispatch(fetchSuccess(data));
                    });
    };
}

export default fetchData;