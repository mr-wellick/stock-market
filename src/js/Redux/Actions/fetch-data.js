import { userInput } from "";

// Process data when incorrect api call is made
function fetchError(assetData){
    return assetData;
}

// Process data when correct api call is made
function fetchSuccess(assetData){
    return assetData;
}


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
                        else
                        {
                            // 4. Dispatch data to success handler
                            dispatch(fetchSuccess(data));
                        }
                    });
    };
}

export default fetchData;
