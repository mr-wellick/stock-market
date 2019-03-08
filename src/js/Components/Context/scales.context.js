import React from "react";

const ScalesContext = React.createContext({
    data: [],
    aes: [],
    dimensions: {},
    className: "",
    x_lab: "",
    y_lab: ""
});

export const ScalesProvider = ScalesContext.Provider;
export const ScalesConsumer = ScalesContext.Consumer;
