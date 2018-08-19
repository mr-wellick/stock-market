// Keep initial state here for now.
export let initialState = {
    stockName: "No Stock",
    dataType: "function=TIME_SERIES_MONTHLY_ADJUSTED",
    dates: [],
    open: [],
    high: [],
    low: [],
    close: [],
    adjustedClose: [],
    percentChange: [],
    error: false,
    errorMessage: ""
};

// Main actions and error handling.
export let GET_USER_INPUT      = "GET_USER_INPUT";
export let REQUEST_STOCK_DATA  = "REQUEST_STOCK_DATA";
export let RECEIVED_STOCK_DATA = "RECEIVED_STOCK_DATA";

// Action & Action Creator
export let USER_DATA_TYPE_SELECTION = "USER_DATA_TYPE_SELECTION";
export function userSelect(dataType)
{
    return {
        type: USER_DATA_TYPE_SELECTION,
        dataType
    };
}
export function userSelectReducer(state, action)
{
    switch(action.type)
    {
        case USER_DATA_TYPE_SELECTION:
            return Object.assign({}, state, {
                dataType: action.dataType
            });
        default:
            return state;
    }
}
