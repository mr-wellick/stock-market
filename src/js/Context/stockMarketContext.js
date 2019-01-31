import React from "react";

const StockMarketContext = React.createContext({
    stockMarketData: [],
    activeIndex: 0,
    appMessages: "",
    isFetchingData: false,
    fetchStockMarketData: () => {},
    onChangeChart: () => {},
    setDuplicateEntry: () => {},
    resetApplicationMessages: () => {},
    selectedChart: ""
});

export const StockMarketProvider = StockMarketContext.Provider;
export const StockMarketConsumer = StockMarketContext.Consumer;
