import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import "./loader.scss";

class Loader extends Component{
    static contextType = StockMarketConsumer;

    render(){
        if(this.context.isFetchingData === false)
            return null;

        return(
            <div className="loader">
                <div className="loader__block1"></div>
                <div className="loader__block2"></div>
                <div className="loader__block3"></div>
                <div className="loader__block4"></div>
            </div>
        );
    }
}

export default Loader;
