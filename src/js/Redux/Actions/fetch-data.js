import { userInput }     from "./user-input";
import { FETCH_ERROR }   from "../Constants";
//import { FETCH_SUCCESS } from "../Constants";
//let url    = "https://www.alphavantage.co/query?";
//let symbol = `symbol${assetName}&`
//let apiKey = "apikey=AAG3PU4MLMB9JHS3";


// Process data when incorrect api call is made
function fetchError(assetData){

    // 1. Process data first

    // 2. Then create action
    return {
        type: FETCH_ERROR,
        assetData,
        error: true,
        errorMessage: ""
    };
}

// Process data when correct api call is made
//function fetchSuccess(assetData){
//    return {
//        type: FETCH_SUCCESS,
//        assetData
//    };
//}

// Make api request
function fetchData(assetName)
{
    return function(dispatch){

        // 1. First Dispatch user input
        dispatch(userInput(assetName));

        //2. Next, request data
        return fetch().then(res => res.json())
                      .then(data => Object.entries(data))
                      .then(data => {
                        // 3. Dispatch data to error handler
                        if(data[0][1] === "Error Message")
                            dispatch(fetchError(data));
                    });
    };
}

export default fetchData;