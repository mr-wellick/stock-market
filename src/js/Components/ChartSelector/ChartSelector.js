import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import "./style.scss";

class ChartSelector extends Component {
    static contextType = StockMarketConsumer;

    render() {
        if(this.context.stockMarketData.length === 0)
            return null;

        return (
            <form onChange={ this.context.onChangeChart } className="chart-selector-container">
                <div>
                    <input
                        type="radio"
                        value="HistoricalChart"
                        id="HistoricalChart"
                        name="active-chart"
                        defaultChecked
                    />
                    <label htmlFor="HistoricalChart">
                        Historical
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="MarketCap"
                        id="MarketCap"
                        name="active-chart"
                    />
                    <label htmlFor="MarketCap">
                        Market Cap
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        value="Financials"
                        id="Financials"
                        name="active-chart"
                    />
                    <label htmlFor="Financials">
                        Financials
                    </label>
                </div>
            </form>
        );
    }
}

export default ChartSelector;
