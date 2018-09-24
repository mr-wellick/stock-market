import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
//import { Axis }            from "../Axis";
//import { Line }            from "../Line";
//import { findLinearScale } from "../../Utilities";
//import { findTimeScale }   from "../../Utilities";
import { WithDimensions }  from "../../HOC"; // Used to add width, height, and padding
import "./lineChart.scss";

class __LineChart__ extends Component{
    render(){
        return(
            <svg width={ this.props.width } height={ this.props.height }>
            </svg>
        );
    }
}

__LineChart__.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

// Adding width, height, and padding
let LineChart = WithDimensions(__LineChart__);

export default LineChart;
