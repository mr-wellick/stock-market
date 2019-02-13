import React             from "react";
import { Component }     from "react";
import { GGPLOT }        from "react-d3-ggplot";
import { Line }         from "react-d3-ggplot";
import { NoChartToShow } from "../NoChartToShow/";

class FinancialsChart extends Component{
    formatData(){
        const { stockMarketData, activeIndex } = this.props;
        const activeDataSet = stockMarketData[activeIndex]["financials"]["financials"]; // data formatted like this from API

        const formattedData = activeDataSet.map(item => ({
            ...item,
            reportDate: new Date(item.reportDate)
        }));

        return formattedData;
    }

    render(){
        const { stockMarketData, activeIndex } = this.props;

        if(stockMarketData.length === 0)
            return null;

        // if no financials data, show message
        if(!stockMarketData[activeIndex]["financials"]["financials"])
            return (
                <NoChartToShow
                    { ...this.props.dimensions }
                    message={ "Sorry! No financials available for this stock." }
                />
            );

        return(
            <GGPLOT
                data={ this.formatData() }
                aes={ ["reportDate", "netIncome"] }
                dimensions={ this.props.dimensions }
            >
                <Line/>
            </GGPLOT>
        );
    }
}

export default FinancialsChart;
