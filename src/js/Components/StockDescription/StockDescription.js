import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import "./stockDescription.scss";

class StockDescription extends Component{
    static contextType = StockMarketConsumer;

    render(){
        if(this.context.stockMarketData.length === 0)
            return null;

        const { activeIndex }       = this.context;
        const { company, relevant } = this.context.stockMarketData[activeIndex];

        return(
            <div className="stock-description__container">
                <div className="company-description">
                    <h2>Description</h2>
                    <p>{ company["description"] }</p>
                </div>
            </div>
        );
    }
}

export default StockDescription;
