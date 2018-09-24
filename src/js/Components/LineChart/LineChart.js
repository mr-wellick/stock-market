import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
//import { Axis }            from "../Axis";
//import { Line }            from "../Line";
//import { findLinearScale } from "../../Utilities";
//import { findTimeScale }   from "../../Utilities";
import "./lineChart.scss";

class LineChart extends Component{

    state = {
        width: window.innerWidth,
        height: window.innerHeight/2
    }

    render(){
        return(
            <svg width={ this.state.width } height={ this.state.height }>
            </svg>
        );
    }
}

LineChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

export default LineChart;
