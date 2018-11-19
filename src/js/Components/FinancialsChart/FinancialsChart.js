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
        stockData: PropTypes.object
    }

    state = {
        width: window.innerWidth*0.80,
        height: window.innerHeight*0.79,
        padding: 40,
    }

    handleChartResize = () => {
        this.setState({
            width: window.innerWidth*0.80,
            height: window.innerHeight*0.79
        });
    }

    formatData(objectKeys){
        let { financials } = this.props.stockData.financials;
        let data           = financials.map(item => ({
            xValue: new Date(item[objectKeys[0]]),
            yValue: Number(item[objectKeys[1]])
        }));

        return data;
    }

    setXScale(objectKeys){
        // get x-values
        let dates = this.formatData(objectKeys).map(item => item.xValue);

        // create xScale
        let scaleObj  = new scaleFinder(dates);
        let xScale    = scaleObj.getScale(scaleTime);

        // set scale range
        let { padding, width } = this.state;
        xScale.range([padding, width - padding]).nice();

        return xScale;
    }

    setYScale(objectKeys){
        // get y-values
        let yValues = this.formatData(objectKeys).map(item => item.yValue);

        // create xScale
        let scaleObj  = new scaleFinder(yValues);
        let yScale    = scaleObj.getScale(scaleLinear);

        // set scale range
        let { height, padding } = this.state;
        yScale.range([(height - padding), padding]).nice();

        return yScale;
    }

    render(){
        let { width, height, padding } = this.state;

        // empty array gets coerced into a falsy value.
        if(!this.props.stockData)
            return null;

        return(
            <svg width={ width } height={ height } className="financials">
                <YGrid
                    yScale={ this.setYScale(["reportDate", "grossProfit"])}
                    padding={ padding }
                    width={ width }
                />
                <YAxis
                    scale={ this.setYScale(["reportDate", "grossProfit"]) }
                    width={ width }
                    padding={ padding }
                    formatType=".0s"
                />
                <XAxis
                    scale={ this.setXScale(["reportDate", "grossProfit"]) }
                    height={ height }
                    padding={ padding }
                />
                <Line
                    xScale={ this.setXScale(["reportDate", "grossProfit"]) }
                    yScale={ this.setYScale(["reportDate", "grossProfit"]) }
                    data={ this.formatData(["reportDate", "grossProfit"]) }
                    color={ "orange" }
                />
                <Line
                    xScale={ this.setXScale(["reportDate", "totalRevenue"]) }
                    yScale={ this.setYScale(["reportDate", "totalRevenue"]) }
                    data={ this.formatData(["reportDate", "totalRevenue"]) }
                    color={ "red" }
                />
                <Line
                    xScale={ this.setXScale(["reportDate", "researchAndDevelopment"]) }
                    yScale={ this.setYScale(["reportDate", "researchAndDevelopment"]) }
                    data={ this.formatData(["reportDate",  "researchAndDevelopment"]) }
                    color={ "black" }
                />
                <Line
                    xScale={ this.setXScale(["reportDate", "netIncome"]) }
                    yScale={ this.setYScale(["reportDate", "netIncome"]) }
                    data={ this.formatData(["reportDate",  "netIncome"]) }
                    color={ "aqua" }
                />
                <Line
                    xScale={ this.setXScale(["reportDate", "totalCash"]) }
                    yScale={ this.setYScale(["reportDate", "totalCash"]) }
                    data={ this.formatData(["reportDate",  "totalCash"]) }
                    color={ "pink" }
                />
                <Line
                    xScale={ this.setXScale(["reportDate", "totalDebt"]) }
                    yScale={ this.setYScale(["reportDate", "totalDebt"]) }
                    data={ this.formatData(["reportDate",  "totalDebt"]) }
                    color={ "purple" }
                />
            </svg>
        );
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleChartResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleChartResize);
    }
}

export default FinancialsChart;
