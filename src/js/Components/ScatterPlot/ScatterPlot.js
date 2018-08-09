import React, { Component }       from "react";
import PropTypes                  from "prop-types";
import { findXScale, findYScale } from "./Utilities";
import { select }                 from "d3-selection";
import { axisBottom, axisLeft }   from "d3-axis";
import { timeParse }              from "d3-time-format";
import { line }                   from "d3-shape";
import "./scatterPlot.scss";

// Now, reformat data labels.
class ScatterPlot extends Component{
    componentDidUpdate(){

        // Get width, height, padding
        let { height } = this.props;
        let { width }  = this.props;
        let { color }  = this.props;
        let padding    = 50;

        // Parse string dates to string objects, string values to numbers, and store data
        let parseTime     = timeParse("%Y-%m-%d");
        let { stockData } = this.props.data;
        let data          = stockData.map( item => [ parseTime(item[0]), Number(item[1]["5. adjusted close"]) ] );

        // Need to remove old nodes first then update.
        if(this.node.children.length > 0){
            select(this.node)
                .selectAll("g")
                .remove();
        }

        // Find x-scale and y-scale
        let xScale = findXScale(data, width, padding);
        let yScale = findYScale(data, height, padding);

        // Add x-axis
        select(this.node)
            .append("g")
            .attr("transform", "translate(0," + (height - padding) + ")")
            .call(axisBottom(xScale));

        // Add y-axis
        select(this.node)
            .append("g")
            .attr("transform", "translate(" + padding + ",0)")
            .call(axisLeft(yScale));

        // Line object
        let lineFunc = line().x(d => xScale(d[0])).y(d => yScale(d[1]));

        // Add line to plot
        select(this.node)
            .append("g")
            .append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", color)
            .attr("stroke-width", 1.5)
            .attr("d", lineFunc);
    }

    render(){
        return(
            <svg
                ref={ node => this.node = node }
                width={ this.props.width }
                height={ this.props.height }
            />
        );
    }
}

ScatterPlot.propTypes = {
    data: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string
};

export default ScatterPlot;
