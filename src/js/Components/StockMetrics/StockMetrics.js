import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import "./stockMetrics.scss";

class StockMetrics extends Component {
    static propTypes = {
        stockData: PropTypes.object
    }

    render(){
        if(!this.props.stockData)
            return null;

        let { quote, stats } = this.props.stockData;

        return(
            <div className="metrics-container">
                <div className="metrics-name__container">
                    <h1 className="company-name">
                        <b>{ quote["companyName"] }</b>
                    </h1>
                    <span> [{ quote["symbol"] }] </span>
                </div>
                <div className="metrics-price__container">
                    <h1 className="company-price">{ quote["close"] }</h1>
                    <span
                        className={
                            quote["changePercent"] > 0 ? "green" : "red"
                        }
                    > { `${quote["change"]} (${quote["changePercent"]*100}%)` }
                    </span>
                </div>
            </div>
        );
    }
}

export default StockMetrics;
