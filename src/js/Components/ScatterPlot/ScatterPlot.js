import React, { Component }       from "react";
import PropTypes                  from "prop-types";
//import { findXScale, findYScale } from "./Utilities";
import { select }                 from "d3-selection";
import { axisBottom }             from "d3-axis";
import { axisLeft }               from "d3-axis";
import { timeParse }              from "d3-time-format";
import "./scatterPlot.scss";
import { min, max } from "d3-array";
import { scaleTime } from "d3-scale";
import { scaleLinear } from "d3-scale";
import { line } from "d3-shape";

// Now, reformat data labels.
class ScatterPlot extends Component{
    componentDidUpdate(){

        // Get width, height, paddin
        let { height }    = this.props;
        let { width }     = this.props;
        let padding       = 50;

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

        // Find x-scale
        let xMin   = min(data, d => d[0]);
        let xMax   = max(data, d => d[0]);
        let xScale = scaleTime().domain([xMin, xMax]);
        xScale.range([padding, width - padding]);

        // Find y-scale
        let yMin = min(data, d => d[1]);
        let yMax = max(data, d => d[1]);
        let yScale = scaleLinear().domain([yMin, yMax]);
        yScale.range([height - padding, padding]);

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
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", lineFunc);
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
    data: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string
};

export default ScatterPlot;
