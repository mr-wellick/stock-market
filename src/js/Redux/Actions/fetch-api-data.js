//import { FETCH_SUCCESS } from "../Constants";
//import { FETCH_ERROR }   from "../Constants";
//import { userInput }     from "./user-input";

// api stuff
//let url    = "https://www.alphavantage.co/query?";
//let apiKey = "apikey=AAG3PU4MLMB9JHS3";

// stock or crypto data
//let stock  = `symbol=${assetName}&`;
//let crypto = `symbol=${assetName}&market=USD&`;

//function fetchSuccess(assetData)
//{
//    return {
//        type: FETCH_SUCCESS,
//        assetData,
//        errorMessage: ""
//    };
//}
//
//function fetchError(assetData)
//{
//    return {
//        type: FETCH_ERROR,
//        assetData,
//        errorMessage: assetData[0][1]
//    };
//}
//
//function fetchAPIData(assetName)
//{
//    return function(dispatch){
//        // 1. Get user input
//        dispatch(userInput(assetName));
//
//        // 2. Return a promise
//        return fetch(data)
//                .then(res => res.json())
//                .then(data => Object.entries(data))
//                .then(data =>{
//                    if(data[0][0] === "Error Message")
//                        dispatch(fetchError(data));
//                });
//
//    };
//}
//
//export default fetchAPIData;