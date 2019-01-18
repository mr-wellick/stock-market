import React                   from "react";
import { Component }           from "react";
import { HistoricalChart }     from "../HistoricalChart/";
import { Histogram }           from "../Histogram/";
import { FinancialsChart }     from "../FinancialsChart/";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";

class ActiveChart extends Component{
    static contextType = StockMarketConsumer;

    state = {
        width: window.innerWidth*0.90,
        height: window.innerHeight*0.70,
        padding: 40
    }

    handleChartResize = () => {
        this.setState({
            width: window.innerWidth*0.90,
            height: window.innerHeight*0.70
        });
    }

    render(){
        switch(this.context.selectedChart)
        {
            case "HistoricalChart":
                return (
                    <HistoricalChart
                        width={ this.state.width }
                        height={ this.state.height }
                        padding={ this.state.padding }
                        stockData={ this.context.stockMarketData[this.context.activeIndex] }
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
                return <h1>Something went horribly wrong!</h1>;
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleChartResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleChartResize);
    }
}

export default ActiveChart;
