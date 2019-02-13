import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import "./style.scss";

class StockMetrics extends Component {
    static contextType = StockMarketConsumer;

    render(){
        if(this.context.stockMarketData.length === 0)
            return <div style={{ height: "186px" }}></div>;

        const { activeIndex } = this.context;
        const { quote }       = this.context.stockMarketData[activeIndex];

        return(
            <section className="metrics-container">
                <div className="metrics-name__container">
                    <p className="company-name">
                        <span className="company-full-name">
                            <b>{ `${quote["companyName"]}` }</b>&nbsp;&nbsp;
                        </span>
                        { `[${quote["symbol"]}]` }
                    </p>
                </div>
                <div className="metrics-price__container">
                    <p>
                        <span className="company-price">
                            <b>{ quote["close"] }</b>
                        </span>
                        &nbsp;&nbsp;
                        <span className={ quote["changePercent"] >= 0 ? "green" : "red"}>
                            { `${quote["change"]} (${quote["changePercent"]})` }
                        </span>
                    </p>
                </div>
            </section>
        );
    }
}

export default StockMetrics;
