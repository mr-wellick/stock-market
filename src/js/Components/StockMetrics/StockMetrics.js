import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import "./stockMetrics.scss";

class StockMetrics extends Component {
    static contextType = StockMarketConsumer;

    render(){
        if(this.context.stockMarketData.length === 0)
            return null;

        const { activeIndex } = this.context;
        const { quote }       = this.context.stockMarketData[activeIndex];

        return(
            <div className="metrics-container">
                <div className="metrics-name__container">
                    <h1 className="company-name">
                        <b>{ quote["companyName"] }</b>
                    </h1>
                    &nbsp;
                    <span>[{ quote["symbol"] }]</span>
                </div>
                <div className="metrics-price__container">
                    <h1 className="company-price">{ quote["close"] }</h1>
                    &nbsp;
                    <span
                        className={ quote["changePercent"] > 0 ? "green" : "red"}
                    >
                        { `${quote["change"]} (${quote["changePercent"]})` }
                    </span>
                </div>
            </div>
        );
    }
}

export default StockMetrics;
