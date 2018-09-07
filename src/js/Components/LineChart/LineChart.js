import React, { Component } from "react";
import PropTypes            from "prop-types";
import { select }           from "d3-selection";
import { timeParse }        from "d3-time-format";
import { min, max }         from "d3-array";
import { scaleTime }        from "d3-scale";
import { scaleLinear }      from "d3-scale";
import { axisBottom }       from "d3-axis";
import { axisLeft }         from "d3-axis";
import { line }             from "d3-shape";
import { transition }       from "d3-transition";
import "./lineChart.scss";

class LineChart extends Component{

        componentDidUpdate(){
        // Get Data
        let { processedData } = this.props;
        let { color }         = this.props;
        let dates             = processedData["dates"];
        let prices            = processedData["5. adjusted close"];
        let timeFormatter     = timeParse("%Y-%m-%d");
        let __dataToRender__  = [];

        // Parse data into numbers and date object
        if( dates !== undefined && prices !== undefined )
        {
            dates  = dates.map( item => timeFormatter(item) );
            prices = prices.map( item => Number(item) );

            // Create an array of [x, y] arrays
            for( let i = 0; i < dates.length; i++ )
                __dataToRender__.push([ dates[i], prices[i] ]);

            // Create x-scale
            let xMin   = min( __dataToRender__, d => d[0] );
            let xMax   = max( __dataToRender__, d => d[0] );
            let xScale = scaleTime().domain([xMin, xMax]);
            xScale.range([50, this.props.width - 50]).nice();

            // Add x-axis
            let xAxisPadding = "translate(0," + (this.props.height - 50) + ")";
            select(".x-axis")
                .transition()
                .duration(1200)
                .attr("transform", xAxisPadding)
                .call(axisBottom(xScale));


            // Find y-scale
            let yMin   = min( __dataToRender__, d => d[1] );
            let yMax   = max( __dataToRender__, d => d[1] );
            let yScale = scaleLinear().domain([yMin, yMax]);
            yScale.range([(this.props.height - 50), 50]).nice();

            // Add y-axis
            let yAxisPadding = "translate(" + 50 + ",0)";
            select(".y-axis")
                .transition()
                .delay(1000)
                .duration(1200)
                .attr("transform", yAxisPadding)
                .call(axisLeft(yScale));

            // Create line
            let lineForChart = line().x(d => xScale(d[0])).y(d => yScale(d[1]));

            select(".line-data")
                .datum(__dataToRender__)
                .transition()
                .delay(2400)
                .duration(500)
                .attr("fill", "none")
                .attr("stroke", color)
                .attr("stroke-width", 1.5)
                .attr("d", lineForChart);
        }
    }

    render(){
        return(
            <svg
                ref={ node => this.node = node }
                width={ this.props.width }
                height={ this.props.height }
            >
                <g className="x-axis"></g>
                <g className="y-axis"></g>
                <g>
                    <path className="line-data"/>
                </g>
            </svg>
        );
    }
}

LineChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    processedData: PropTypes.object,
    color: PropTypes.string
};

export default LineChart;
