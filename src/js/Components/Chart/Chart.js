import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { Grids }     from "../Grids/";
import { Labels }    from "../Labels/";
import { XAxis }     from "../XAxis/";
import { YAxis }     from "../YAxis/";
import { Line }      from "../Line/";
import { Points }    from "../Points/";
import tip           from "d3-tip";
import "./chart.scss";

class Chart extends Component{
    static propTypes = {
        successData: PropTypes.object
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

    setXScale(){
        let { padding, width } = this.state;
        let { xScale }         = this.props.successData["data"];
        xScale.range([padding, width - padding]).nice();

        return xScale;
    }

    setYScale(){
        let { height, padding } = this.state;
        let { yScale }          = this.props.successData["data"];
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
        if(!this.props.successData)
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
                <XAxis
                    scale={ this.setXScale() }
                    height={ height }
                    padding={ padding }
                />
                <YAxis
                    scale={ this.setYScale() }
                    width={ width }
                    padding={ padding }
                />
                <Line
                    xScale={ this.setXScale() }
                    yScale={ this.setYScale() }
                    x={ this.props.successData["data"]["dateObjects"] }
                    y={ this.props.successData["data"]["adjustedClose"] }
                    color={ "orange" }
                />
                <Points
                    xScale={ this.setXScale() }
                    yScale={ this.setYScale() }
                    x={ this.props.successData["data"]["dateObjects"] }
                    y={ this.props.successData["data"]["adjustedClose"] }
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
