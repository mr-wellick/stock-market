import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";

class ChartSelector extends Component {
    static propTypes = {
        onChangeChart: PropTypes.func
    }

    render() {
        return (
            <form onChange={this.props.onChangeChart}>
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
                <input
                    type="radio"
                    value="MarketCap"
                    id="MarketCap"
                    name="active-chart"
                />
                <label htmlFor="MarketCap">
                    Market Cap
                </label>
                <input
                    type="radio"
                    value="Financials"
                    id="Financials"
                    name="active-chart"
                />
                <label htmlFor="Financials">
                    Financials
                </label>
            </form>
        );
    }
}

export default ChartSelector;
