import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import { HistoricalChart } from "../HistoricalChart/";
import { Histogram } from "../Histogram/";
import { FinancialsChart } from "../FinancialsChart/";

class ActiveChart extends Component{
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
        activeStockData: PropTypes.object,
        selectedChart: PropTypes.string
    }

    render(){
        switch(this.props.selectedChart)
        {
            case "HistoricalChart":
                return (
                    <HistoricalChart
                        width={ this.props.width }
                        height={ this.props.height }
                        padding={ this.props.padding }
                        stockData={ this.props.activeStockData }
                    />
                );
            case "MarketCap":
                return (
                    <Histogram
                        width={ this.props.width }
                        height={ this.props.height }
                        padding={ this.props.padding }
                        stockData={ this.props.stockData }
                    />
                );
            case "Financials":
                return (
                    <FinancialsChart
                        width={ this.props.width }
                        height={ this.props.height }
                        padding={ this.props.padding }
                        stockData={ this.props.activeStockData }
                    />
                );
            default:
                return <h1>hello</h1>
        }
    }
}

export default ActiveChart;
