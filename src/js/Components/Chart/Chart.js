import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { Grids }     from "../Grids/";
import { Labels }    from "../Labels/";
import { XAxis }     from "../XAxis/";
import { YAxis }     from "../YAxis/";
import { Line }      from "../Line/";
import { Points }    from "../Points/";
import { scaleFinder } from "../../Utilities/";
import { scaleTime }   from "d3-scale";
import { scaleLinear } from "d3-scale";
import tip           from "d3-tip";
import "./chart.scss";

class Chart extends Component{
    static propTypes = {
        stockData: PropTypes.object
    }

    state = {
        width: window.innerWidth/1.4,
        height: window.innerHeight/1.6,
        padding: 40,
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth/1.4,
            height: window.innerHeight/1.6
        });
    }

    getXValues(){
        // get dates
        let { chart } = this.props.stockData;
        let dates     = chart.map( item => new Date(item["date"]));

        return dates;
    }

    setXScale(){
        // get x-values
        let dates = this.getXValues();

        // create xScale
        let scaleObj  = new scaleFinder(dates);
        let xScale    = scaleObj.getScale(scaleTime);

        // set scale range
        let { padding, width } = this.state;
        xScale.range([padding, width - padding]).nice();

        return xScale;
    }

    getYValues(){
        // get prices
        let { chart } = this.props.stockData;
        let prices     = chart.map( item => Number(item["close"]));

        return prices;
    }

    setYScale(){
        // get y-values
        let prices = this.getYValues();

        // create xScale
        let scaleObj  = new scaleFinder(prices);
        let yScale    = scaleObj.getScale(scaleLinear);

        // set scale range
        let { height, padding } = this.state;
        yScale.range([(height - padding), padding]).nice();

        return yScale;
    }

    // Originally part of <Points/> component. Bringing this method here allows
    // <Points/> to be reusable.
    setToolTip(){
        let toolTip = tip().html(data => {
            let date          = data[0].toDateString();
            let USPriceFormat = data[1].toLocaleString("en-US", { style: "currency", currency: "USD" });

            return (
                `<div class="tooltips">
                    <div class="tooltips-date">${date}</div>
                    <div class="tooltips-price">${USPriceFormat}</div>
                </div>`
            );
        });

        return toolTip;
    }

    render(){
        let { width, height, padding } = this.state;

        // empty array gets coerced into a falsy value.
        if(!this.props.stockData)
            return null;

        return(
            <svg width={ width } height={ height }>
                <Grids
                    scale={ this.setYScale()}
                    padding={ padding }
                    width={ width }
                />
                <Labels
                    width={ width }
                    height={ height }
                    padding={ padding }
                    xLabel={ "Year" }
                    yLabel={ "Price" }
                />
                <YAxis
                    scale={ this.setYScale() }
                    width={ width }
                    padding={ padding }
                />
                <XAxis
                    scale={ this.setXScale() }
                    height={ height }
                    padding={ padding }
                />
                <Line
                    xScale={ this.setXScale() }
                    yScale={ this.setYScale() }
                    x={ this.getXValues() }
                    y={ this.getYValues() }
                    color={ "orange" }
                />
                <Points
                    xScale={ this.setXScale() }
                    yScale={ this.setYScale() }
                    x={ this.getXValues() }
                    y={ this.getYValues() }
                    color={ "orange" }
                    toolTip={ this.setToolTip() }
                    className={ "line-chart" }
                />
            </svg>
        );
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
}

export default Chart;