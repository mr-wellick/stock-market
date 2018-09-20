import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { Axis }            from "../Axis";
import { Line }            from "../Line";
import { findTimeScale }   from "../../Utilities";
import { findLinearScale } from "../../Utilities";
import "./lineChart.scss";

class LineChart extends Component{
    state = {
        width: 300,
        height: 250,
        padding: 40,
        r: 2,
        color: "orange",
        x: this.props.successData[0]["processedData"]["dates"],
        y: this.props.successData[0]["processedData"]["adjustedClose"],
        xScale: findTimeScale(this.props.successData[0]["processedData"]["dates"]),
        yScale: findLinearScale(this.props.successData[0]["processedData"]["adjustedClose"]),
    }

    render(){
        let { width, height, padding } = this.state;
        let { x, y, xScale, yScale }   = this.state;
        let { r, color }               = this.state;

        return(
            <svg width={ width } height={ height }>
                <Line
                    x={ x }
                    xScale={ xScale }
                    y={ y }
                    yScale={ yScale }
                    r={ r }
                    color={ color }
                    padding={ padding }
                    width={ width }
                    height={ height }
                />
                <Axis
                    scale={ xScale }
                    padding={ padding }
                    width={ width }
                    height={ height }
                    axis={ "x-axis" }
                />
                <Axis
                    scale={ yScale }
                    padding={ padding }
                    width={ width }
                    height={ height }
                    axis={ "y-axis" }
                />
            </svg>
        );
    }
}

LineChart.propTypes = {
    successData: PropTypes.array
};

export default LineChart;
