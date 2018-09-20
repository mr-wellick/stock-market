import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { Axis }            from "../Axis";
import { findTimeScale }   from "../../Utilities/";
import { findLinearScale } from "../../Utilities/";
import "./lineChart.scss";

class LineChart extends Component{
    state = {
        width: 300,
        height: 250,
        padding: 40,
        activeData: this.props.successData[0]
    }

    render(){
        let { width, height, padding } = this.state;
        let { activeData }             = this.state;

        return(
            <svg width={ width } height={ height }>
                <Axis
                    scale={ findTimeScale(activeData["processedData"]["dates"]) }
                    padding={ padding }
                    width={ width }
                    height={ height }
                    axis={ "x-axis" }
                />
                <Axis
                    scale={ findLinearScale(activeData["processedData"]["percentChange"]) }
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
