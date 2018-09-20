import React         from "react";
import { Component } from "react";
import { line }      from "d3-shape";
import { select }    from "d3-selection";
import "./line.scss";

class Line extends Component{

    calculateLine(){
        let { x, y }           = this.props;
        let { xScale, yScale } = this.props;
        let { width, height }  = this.props;
        let { padding }        = this.props;
        let { color }          = this.props;
        let dataToRender       = [];

        // Convert data to proper form
        x = x.map(date => new Date(date)).reverse();
        y = y.map(percentChange => Number(percentChange)).reverse();

        // Set scales ranges so data is visible
        xScale.range([padding, width - padding]).nice();
        yScale.range([(height - padding), padding]).nice();

        // Need to store data in this format
        for( let i = 0; i < x.length; i++ )
            dataToRender.push([ x[i], y[i] ]);

        // Create line
        let lineForChart = line().x(d => xScale(d[0])).y(d => yScale(d[1]));
        select(".line-data")
            .datum(dataToRender)
            .attr("fill", "none")
            .attr("stroke", color)
            .attr("stroke-width", 1.5)
            .attr("d", lineForChart);
    }

    render(){
        return(
            <g>
                <path className="line-data"/>
            </g>
        );
    }

    componentDidMount(){
        this.calculateLine();
    }
}

export default Line;