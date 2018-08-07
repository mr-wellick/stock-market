import React, { Component } from "react";
import PropTypes            from "prop-types";
import { select }           from "d3-selection";
import "./scatterPlot.scss";

class ScatterPlot extends Component{

    componentDidMount(){
        //select(this.node)
        //    .append("g")
        //   .selectAll("circle")
    }

    render(){
        return(
            <svg
                ref={ node => this.node = node }
                width="500"
                height="300"
            />
        );
    }
}

ScatterPlot.propTypes = {
    data: PropTypes.object
};

export default ScatterPlot;
