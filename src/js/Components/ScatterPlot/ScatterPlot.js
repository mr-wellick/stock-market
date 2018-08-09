import React, { Component }       from "react";
import PropTypes                  from "prop-types";
import { findXScale, findYScale } from "./Utilities";
import { select }                 from "d3-selection";
import { axisBottom }             from "d3-axis";
import { axisLeft }               from "d3-axis";
import { timeParse }              from "d3-time-format";
import "./scatterPlot.scss";

// Now, redo a line chart example in d3 to finalize this component.
class ScatterPlot extends Component{
    componentDidUpdate(){

        let height        = 500;
        let padding       = 50;
        let parseTime     = timeParse("%Y-%m-%d");
        let { stockData } = this.props.data;
        let doubleArray   = stockData.map(
            item =>
            [
                parseTime(item[0]),
                Number(item[1]["5. adjusted close"])
            ]
        );

        // Need to remove old nodes first then update.
        if(this.node.children.length > 0){
            select(this.node)
                .selectAll("g")
                .remove();
        }

        select(this.node)
            .append("g")
            .selectAll("circle")
            .data(doubleArray)
            .enter()
            .append("circle");

        // Find x and y scales
        let x = findXScale(doubleArray);
        let y = findYScale(doubleArray);

        // Find x and x-axis
        let xAxis = axisBottom(x);
        select(this.node)
            .append("g")
            .attr("transform", "translate(0," + (height - padding) + ")")
            .call(xAxis);

        // Find y and y-axis
        let yAxis = axisLeft(y);
        select(this.node)
            .append("g")
            .attr("transform", "translate(" + padding + ",0)")
            .call(yAxis);

        // Finally add data points
        //select(this.node)
        //    .selectAll("circle")
        //    .attr("cx", d => x(d[0]))
        //    .attr("cy", d => y(d[1]))
        //    .attr("r", 2);
    }

    render(){
        return(
            <svg
                ref={ node => this.node = node }
                width="500"
                height="500"
            />
        );
    }
}

ScatterPlot.propTypes = {
    data: PropTypes.object
};

export default ScatterPlot;
