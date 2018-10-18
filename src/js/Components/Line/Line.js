import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { line }       from "d3-shape";
import { select }     from "d3-selection";
import { transition } from "d3-transition";
import "./line.scss";

class Line extends Component{
    formatData(){
        let { x, y } = this.props;
        let dataToRender = [];

        // Convert data to proper format
        x = x.map(date => new Date(date));
        y = y.map(percentChange => Number(percentChange));

        // Need to store data in this format
        for( let i = 0; i < x.length; i++ )
            dataToRender.push([ x[i], y[i] ]);
        
        return dataToRender;
    }

    setScaleRanges(){
        let { xScale, yScale } = this.props;
        let { width, height }  = this.props;
        let { padding }        = this.props;

        // Set scale ranges so data is visible
        xScale.range([padding, width - padding]).nice();
        yScale.range([(height - padding), padding]).nice();
    }

    appendLineToChart(data){
        let { xScale, yScale } = this.props;
        let { color }          = this.props;
        let lineForChart = line().x(d => xScale(d[0])).y(d => yScale(d[1]));

        select(".line-data")
            .datum(data)
            .transition()
            .delay(200)
            .duration(200)
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
        let dataToRender = this.formatData();
        this.setScaleRanges();
        this.appendLineToChart(dataToRender);
    }

    componentDidUpdate(){
        let dataToRender = this.formatData();
        this.setScaleRanges();
        this.appendLineToChart(dataToRender);
    }
}

Line.propTypes = {
    x: PropTypes.array,
    xScale: PropTypes.func,
    y: PropTypes.array,
    yScale: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    padding: PropTypes.number,
    color: PropTypes.string
};

export default Line;
