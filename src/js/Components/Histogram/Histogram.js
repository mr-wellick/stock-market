import React, { Component }  from "react";
import PropTypes             from "prop-types";
import { findFrequencies }   from "./Utilities";
import { findPercentChange } from "./Utilities";
import { select }            from "d3-selection";
import "./histogram.scss";

// Move to own files
import { scaleLinear } from "d3-scale";
import { min, max }    from "d3-array";
import { axisBottom }  from "d3-axis";
import { axisLeft }    from "d3-axis";

// Notes:
//
// 1. Have to scale bar height proportional to frequencies data.
// 2. By default, d3 doesn't do #1.
// 3. When adding axis to histogram, it's not as easy as with scatter plots in d3.

class Histogram extends Component {

    componentDidUpdate(){
        // Data and svg basic data
        let { stockData }     = this.props.data;
        let { scalar }        = this.props;
        let { width, height } = this.props;
        let { color }         = this.props;

        // Get dates and closing prices
        let adjustedClose = stockData.map( item => Number(item[1]["5. adjusted close"]) );

        // Get percent change of prices
        let percentChange = findPercentChange(adjustedClose);
        let frequencies   = findFrequencies(percentChange);

        // First, check for old nodes to remove
        if(this.node.children.length > 0){
            select(this.node)
                .selectAll("g")
                .remove();
        }

        // Append data nodes
        select(this.node)
            .append("g")
            .attr("transform", "translate(40," + (-35) + ")")// Temporary fix. Fragile.
            .selectAll("rect")
            .data(frequencies)
            .enter()
            .append("rect");

        // Add histogram bars
        select(this.node)
            .selectAll("rect")
            .attr("x", (d, i) => i * (width / frequencies.length-2))// Number added after. 2 scales proportional to xAxis.
            .attr("y", (d) => height - d * scalar)
            .attr("width", width / frequencies.length - 3) // Number 3 adds padding between bars.
            .attr("height", (d) => d*scalar)
            .attr("fill", color);

        // Find xScale
        let xAxisPadding = 30;
        let xMin         = min(percentChange, d => d);
        let xMax         = max(percentChange, d => d);
        let xScale       = scaleLinear().domain([xMin, xMax]);
        xScale.range([xAxisPadding, width - xAxisPadding]);

        // Append x-axis
        select(this.node)
            .append("g")
            .attr("transform", "translate(0," + (height - xAxisPadding) + ")")
            .call(axisBottom(xScale));

        // Find yScale
        let yAxisPadding = 30;
        let yMin         = min(frequencies, d => d);
        let yMax         = max(frequencies, d => d);
        let yScale       = scaleLinear().domain([yMin, yMax]);
        yScale.range([height - yAxisPadding, yAxisPadding]);

        // Append y-axis
        select(this.node)
            .append("g")
            .attr("transform", "translate(" + yAxisPadding + ",0)")
            .call(axisLeft(yScale).ticks(10));
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

Histogram.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.object,
    scalar: PropTypes.number,
    padding: PropTypes.number,
    color: PropTypes.string
};

export default Histogram;
