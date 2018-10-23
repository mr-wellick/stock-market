import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { Grids }           from "../Grids/";
import { Labels }          from "../Labels/";
import { XAxis }           from "../XAxis/";
import { YAxis }           from "../YAxis/";
import { Line }            from "../Line/";
import { Points }          from "../Points/";
import { ScaleFinder }     from "../../Utilities/";
import { scaleLinear }     from "d3-scale";
import { scaleTime }       from "d3-scale";
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

    setXAndYValues(){
        let { dateObjects, adjustedClose } = this.props.successData["data"];
        let scales                         = new ScaleFinder(dateObjects, adjustedClose);
        return scales;
    }

    setXScale(){
        let { padding, width } = this.state;
        let scaleObj           = this._setXAndYValues();
        let xScale             = scaleObj.getXScale(scaleTime);
        xScale.range([padding, width - padding]).nice();

        return xScale;
    }

    setYScale(){
        let { height, padding } = this.state;
        let scaleObj            = this._setXAndYValues();
        let yScale              = scaleObj.getYScale(scaleLinear);
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
                    x={ this.setXAndYValues().xValues }
                    y={ this.setXAndYValues().yValues }
                    color={ "orange" }
                />
                <Points
                    xScale={ this.setXScale() }
                    yScale={ this.setYScale() }
                    x={ this.setXAndYValues().xValues }
                    y={ this.setXAndYValues().yValues }
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
