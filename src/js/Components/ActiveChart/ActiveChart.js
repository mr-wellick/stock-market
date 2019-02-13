import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import { HistoricalChart }     from "../HistoricalChart/";
import { BarPlot }             from "../BarPlot/";
import { FinancialsChart }     from "../FinancialsChart/";

class ActiveChart extends Component{
    static contextType = StockMarketConsumer;

    state = {
        dimensions: {
            width: window.innerWidth <= 750 ? window.innerWidth : window.innerWidth*0.75,
            height: window.innerHeight*0.70,
            padding: 40
        }
    }

    handleChartResize = () => {
        if(window.innerWidth <= 750)
        {
            this.setState({
                dimensions: {
                    ...this.state.dimensions,
                    width: window.innerWidth,
                    height: window.innerHeight*0.70
                }
            });
        }
        else
        {
            this.setState({
                dimensions: {
                    ...this.state.dimensions,
                    width: window.innerWidth*0.75,
                    height: window.innerHeight*0.70
                }
            });
        }
    }

    render(){
        switch(this.context.selectedChart)
        {
            case "HistoricalChart":
                return (
                    <HistoricalChart
                        { ...this.state }
                        { ...this.context }
                    />
                );
            case "MarketCap":
                return (
                    <BarPlot
                        { ...this.state }
                        { ...this.context }
                    />
                );
            case "Financials":
                return (
                    <FinancialsChart
                        { ...this.state }
                        { ...this.context }
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
