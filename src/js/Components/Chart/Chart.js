import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { XAxis }           from "../XAxis/";
import { YAxis }           from "../YAxis/";
import { Line }            from "../Line/";
import { findLinearScale } from "../../Utilities/";
import { findTimeScale }   from "../../Utilities/";
import { Grids }           from "../Grids/";
import { Points }          from "../Points/";
import { Labels }          from "../Labels/";
import "./chart.scss";

class Chart extends Component{
    static propTypes = {
        successData: PropTypes.object,
        frequency: PropTypes.string
    }

    state = {
        width: window.innerWidth <= 1000 ? window.innerWidth : window.innerWidth/1.4,
        height: window.innerHeight/1.6,
        padding: 40,
    }

    handleResize = () => {
        if(window.innerWidth <= 1000)
        {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight/1.6
            });
        }
        else if(window.innerWidth > 1000)
        {
            this.setState({
                width: window.innerWidth/1.4,
                height: window.innerHeight/1.6
            });
        }
    }

    getXValues(){
        let { dateObjects } = this.props.successData["data"];
        return dateObjects;
    }

    setXScale(){
        let { padding, width } = this.state;
        let dates              = this.getXValues();
        let xScale             = findTimeScale(dates);
        xScale.range([padding, width - padding]).nice();

        return xScale;
    }

    getYValues(){
        let { adjustedClose } = this.props.successData["data"];
        return adjustedClose;
    }

    setYScale(){
        let { height }  = this.state;
        let { padding } = this.state;
        let prices      = this.getYValues();
        let yScale      = findLinearScale(prices);
        yScale.range([(height - padding), padding]).nice();

        return yScale;
    }

    getFrequency(){
        let { frequency } = this.props.successData["data"];
        return frequency;
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
                    frequency={ this.getFrequency() }
                />
                <XAxis
                    scale={ this.setXScale() }
                    height={ height }
                    padding={ padding }
                    frequency={ this.getFrequency() }
                />
                <YAxis
                    scale={ this.setYScale() }
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
