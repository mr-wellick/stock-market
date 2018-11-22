import React             from "react";
import PropTypes         from "prop-types";
import { Component }     from "react";
import { YGrid }         from "../YGrid/";
import { XAxis }         from "../XAxis/";
import { YAxis }         from "../YAxis/";
import { Line }          from "../Line/";
import { NoChartToShow } from "../NoChartToShow/";
import { Labels }        from "../Labels/";

class FinancialsChart extends Component{
    static propTypes = {
        stockData: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number
    }

    formatData(objectKey1, objectKey2){
        let { financials } = this.props.stockData.financials;
        let data           = financials.map(item => ({
            xValue: new Date(item[objectKey1]),
            yValue: Number(item[objectKey2])
        }));

        return data;
    }

    render(){
        let { width, height, padding } = this.props;

        // empty array gets coerced into a falsy value.
        if(!this.props.stockData)
            return null;
        else if(!this.props.stockData["financials"]["financials"]) // data formatted like this from api call
            return (
                <NoChartToShow
                    width={ width }
                    height={ height }
                    message={ "Sorry! No financials available for this stock." }
                />
            );

        return(
            <svg width={ width } height={ height } className="financials">
                <YGrid
                    data={ this.formatData("reportDate", "netIncome") }
                    scaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                <YAxis
                    data={ this.formatData("reportDate", "netIncome") }
                    scaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    formatType=".0s"
                />
                <XAxis
                    data={ this.formatData("reportDate", "netIncome") }
                    scaleType={ "time" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                <Line
                    data={ this.formatData("reportDate", "netIncome") }
                    xScaleType={ "time" }
                    yScaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color={ "orange" }
                />
                <Labels
                    xLabel="Quarter"
                    yLabel="Net Income"
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                {/*
                <Line
                    data={ this.formatData("reportDate", "totalRevenue") }
                    xScaleType={ "time" }
                    yScaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color={ "red" }
                />
                <Line
                    data={ this.formatData("reportDate", "researchAndDevelopment") }
                    xScaleType={ "time" }
                    yScaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color={ "aqua" }
                />
                <Line
                    data={ this.formatData("reportDate", "totalCash") }
                    xScaleType={ "time" }
                    yScaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color={ "purple" }
                />
                <Line
                    data={ this.formatData("reportDate", "totalDebt") }
                    xScaleType={ "time" }
                    yScaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color={ "green" }
                />
                */}
            </svg>
        );
    }
}

export default FinancialsChart;
