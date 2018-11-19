import React            from "react";
import PropTypes        from "prop-types";
import { Component }    from "react";
import { YGrid }        from "../YGrid/";
import { XAxis }        from "../XAxis/";
import { YAxis }        from "../YAxis/";
import { Line }         from "../Line/";
import { scaleFinder }  from "../../Utilities/";
import { scaleTime }    from "d3-scale";
import { scaleLinear }  from "d3-scale";

class FinancialsChart extends Component{
    static propTypes = {
        stockData: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number
    }

    formatData(objectKey){
        let { financials } = this.props.stockData.financials;
        let data           = financials.map(item => ({
            xValue: new Date(item["reportDate"]),
            yValue: Number(item[objectKey])
        }));

        return data;
    }

    setXScale(objectKey){
        // get x-values
        let dates = this.formatData(objectKey).map(item => item.xValue);

        // create xScale
        let scaleObj  = new scaleFinder(dates);
        let xScale    = scaleObj.getScale(scaleTime);

        // set scale range
        let { padding, width } = this.props;
        xScale.range([padding, width - padding]).nice();

        return xScale;
    }

    setYScale(objectKey){
        // get y-values
        let yValues = this.formatData(objectKey).map(item => item.yValue);

        // create xScale
        let scaleObj  = new scaleFinder(yValues);
        let yScale    = scaleObj.getScale(scaleLinear);

        // set scale range
        let { height, padding } = this.props;
        yScale.range([(height - padding), padding]).nice();

        return yScale;
    }

    render(){
        let { width, height, padding } = this.props;

        // empty array gets coerced into a falsy value.
        if(!this.props.stockData)
            return null;

        return(
            <svg width={ width } height={ height } className="financials">
                <YGrid
                    yScale={ this.setYScale("grossProfit") }
                    padding={ padding }
                    width={ width }
                />
                <YAxis
                    scale={ this.setYScale("grossProfit") }
                    width={ width }
                    padding={ padding }
                    formatType=".0s"
                />
                <XAxis
                    scale={ this.setXScale("grossProfit") }
                    height={ height }
                    padding={ padding }
                />
                <Line
                    xScale={ this.setXScale("grossProfit") }
                    yScale={ this.setYScale("grossProfit") }
                    data={ this.formatData("grossProfit") }
                    color={ "orange" }
                />
                <Line
                    xScale={ this.setXScale("totalRevenue") }
                    yScale={ this.setYScale("totalRevenue") }
                    data={ this.formatData("totalRevenue") }
                    color={ "red" }
                />
                <Line
                    xScale={ this.setXScale("researchAndDevelopment") }
                    yScale={ this.setYScale("researchAndDevelopment") }
                    data={ this.formatData("researchAndDevelopment") }
                    color={ "black" }
                />
                <Line
                    xScale={ this.setXScale("netIncome") }
                    yScale={ this.setYScale("netIncome") }
                    data={ this.formatData("netIncome") }
                    color={ "aqua" }
                />
                <Line
                    xScale={ this.setXScale("totalCash") }
                    yScale={ this.setYScale("totalCash") }
                    data={ this.formatData("totalCash") }
                    color={ "pink" }
                />
                <Line
                    xScale={ this.setXScale("totalDebt") }
                    yScale={ this.setYScale("totalDebt") }
                    data={ this.formatData("totalDebt") }
                    color={ "purple" }
                />
            </svg>
        );
    }
}

export default FinancialsChart;