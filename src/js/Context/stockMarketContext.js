import React from "react";

const StockMarketContext = React.createContext({
    stockMarketData: [],
    activeIndex: 0,
    errors: "",
    success: "",
    duplicateEntry: "",
    isFetchingData: false,
    fetchStockMarketData: () => {},
    selectedChart: ""
});

export const StockMarketProvider = StockMarketContext.Provider;
export const StockMarketConsumer = StockMarketContext.Consumer;
