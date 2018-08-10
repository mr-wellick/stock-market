import React, { Component }       from "react";
import PropTypes                  from "prop-types";
import { findXScale, findYScale } from "./Utilities";
import { findPercentChange }      from "./Utilities";
import { select }                 from "d3-selection";
import { axisBottom, axisLeft }   from "d3-axis";
import { timeParse }              from "d3-time-format";
import { line }                   from "d3-shape";
import "./scatterPlot.scss";

// Now, reformat data labels.
// Line and axis data removed. But svg plot remains when no data is retrieved.
class ScatterPlot extends Component{
    componentDidUpdate(){

        let { height }    = this.props;
        let { width }     = this.props;
        let { color }     = this.props;
        let { padding }   = this.props;
        let { stockData } = this.props.data;

        if(stockData[0] !== undefined)
        {
            // Remove SVG if no data is available
            if(stockData[0][0] === "Error Message")
            {
                select(this.node)
                    .selectAll("g")
                    .remove();
            }
            else
            {
                // Parse data
                let data = Object.entries(stockData[1][1]).reverse();
                // Parse dates into date objects
                let parseTime = timeParse("%Y-%m-%d");
                let dates     = data.map( item => parseTime(item[0]) ).slice(1); // Remove first entry to match percentChange.

                // Find percent change of data
                let adjustedClose = data.map( item => item[1]["5. adjusted close"] );
                let percentChange = findPercentChange(adjustedClose);

                // Finalize data for rendering
                let __finalData__ = [];
                for(let i = 0; i < dates.length; i++)
                {
                    __finalData__.push([ dates[i], percentChange[i] ]);
                }

                // Need to remove old nodes first then update.
                if(this.node.children.length > 0)
                {
                    select(this.node)
                        .selectAll("g")
                        .remove();
                }

                // Find x-scale and y-scale
                let xScale = findXScale(__finalData__, width, padding);
                let yScale = findYScale(__finalData__, height, padding);

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
                    .datum(__finalData__)
                    .attr("fill", "none")
                    .attr("stroke", color)
                    .attr("stroke-width", 1.5)
                    .attr("d", lineFunc);

            }
        }
    }

    render(){
        return(
            <div>
                <svg
                    ref={ node => this.node = node }
                    width={ this.props.width }
                    height={ this.props.height }
                />
            </div>
        );
    }
}

ScatterPlot.propTypes = {
    data: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    padding: PropTypes.number
};

export default ScatterPlot;
