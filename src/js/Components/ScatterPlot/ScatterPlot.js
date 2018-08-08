import React, { Component } from "react";
import PropTypes            from "prop-types";
import { select }           from "d3-selection";
import { scaleLinear }      from "d3-scale";
import { scaleTime }        from "d3-scale";
import { max, min }         from "d3-array";
import { axisBottom }       from "d3-axis";
import { axisLeft }         from "d3-axis";
import "./scatterPlot.scss";

// Now, redo a line chart example in d3 to finalize this component.

// Find xScale
function findXScale(data, width = 500, padding = 10){


    let lastEntry = data.length - 1;
    let minDate   = new Date(data[0][0]);
    let maxDate   = new Date(data[lastEntry][0]);
    let scale     = scaleTime().domain([minDate, maxDate]);

    scale.range([padding, width - padding]);

    return(scale);
}

function findYScale(data, height = 460, padding = 10){

    let yMin  = min(data, d => d[1]);
    let yMax  = max(data, d => d[1]);
    let scale = scaleLinear().domain([yMin, yMax]);

    scale.range([height - padding, padding]);

    return(scale);
}

class ScatterPlot extends Component{
    componentDidUpdate(){

        let height  = 500;
        let padding = 50;

        let { stockData } = this.props.data;
        let doubleArray   = Object.entries(stockData).map(item => [item[0], Number(item[1]["5. adjusted close"])]);
        doubleArray       = doubleArray.reverse();

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

        // Find x
        let xAxis = axisBottom(x);
        select(this.node)
            .append("g")
            .attr("transform", "translate(0," + (height - padding) + ")")
            .call(xAxis);

        // Find y
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
