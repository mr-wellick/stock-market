// Keep initial state here for now.
export let initialState = {
    stockName: "No Stock",
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

// Shape for stock data only
export let stocks = {
    stockDataOnly: "function=TIME_SERIES_",
    dataType:
    [
        { monthly: "MONTHLY_ADJUSTED" },
        { daily: "DAILY_ADJUSTED" },
    ]
};

// Shape for crypto
export let crypto = {
    cryptocurrency: "function=DIGITAL_CURRENCY_",
    dataType:
    [
        { monthly: "MONTHLY" },
        { daily: "DAILY" }
    ]
};

// What actions do we need?
export let GET_USER_INPUT      = "GET_USER_INPUT";
export let REQUEST_STOCK_DATA  = "REQUEST_STOCK_DATA";
export let RECEIVED_STOCK_DATA = "RECEIVED_STOCK_DATA";

// Choose stock only.
export let CHOOSE_STOCKS_ONLY      = "CHOOSE_STOCKS_ONLY";
export let CHOOSE_MONTHLY_ADJUSTED = "CHOOSE_MONTHLY_ADJUSTED";
export let CHOOSE_DAILY_ADJUSTED   = "CHOOSE_DAILY_ADJUSTED";

// Choose cryptocurrency only.
export let CHOOSE_CRYPTOCURRENCY_ONLY = "CHOOSE_CRYPTOCURRENCY_ONLY";
export let CHOOSE_MONTHLY             = "CHOOSE_MONTHLY";
export let CHOOSE_DAILY               = "CHOOSE_DAILY";
