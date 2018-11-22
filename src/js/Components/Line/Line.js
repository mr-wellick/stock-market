import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { line }            from "d3-shape";
import { curveCatmullRom } from "d3-shape";
import { select }          from "d3-selection";
import { transition }      from "d3-transition";
import { scaleFinder }     from "../../Utilities/";
import "./line.scss";

class Line extends Component{
    static propTypes = {
        data: PropTypes.array,
        padding: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number,
        xScaleType: PropTypes.string,
        yScaleType: PropTypes.string,
        color: PropTypes.string
    }

    getXScale(){
        // get props
        let { width, padding, data, xScaleType } = this.props;

        // get x-values
        let xValues  = data.map(item => item.xValue);
        let scaleObj = new scaleFinder(xValues);
        let xScale;

        if(xScaleType === "time")
            xScale = scaleObj.getTimeScale();

        if(xScaleType === "linear")
            xScale = scaleObj.getLinearScale();

        if(xScaleType === "ordinal")
            xScale = scaleObj.getOrdinalScale(0.5); // pass in binWidth

        // set scale range
        xScale.range([padding, width - padding]).nice();

        return xScale;
    }

    getYScale(){
        // get y-values
        let { data, yScaleType, height, padding } = this.props;
        let yValues  = data.map(item => item.yValue);

        // create xScale
        let scaleObj  = new scaleFinder(yValues);
        let yScale;

        if(yScaleType === "time")
            yScale = scaleObj.getTimeScale();

        if(yScaleType === "linear")
            yScale = scaleObj.getLinearScale();

        if(yScaleType === "ordinal")
            yScale = scaleObj.getOrdinalScale();

        // set scale range
        yScale.range([(height - padding), padding]).nice();

        return yScale;
    }

    appendLineToChart(){
        let { color, data } = this.props;
        let xScale          = this.getXScale();
        let yScale          = this.getYScale();
        let chartLine       = line().x(d => xScale(d.xValue)).y(d => yScale(d.yValue)).curve(curveCatmullRom);

        select(this.node)
            .datum(data)
            .transition()
            .delay(200)
            .duration(200)
            .attr("fill", "none")
            .attr("stroke", color)
            .attr("stroke-width", 1.5)
            .attr("d", chartLine);
    }

    render(){
        return(
            <g className="line-data">
                <path ref={ node => this.node = node }/>
            </g>
        );
    }

    componentDidMount(){
        this.appendLineToChart();
    }

    componentDidUpdate(){
        this.appendLineToChart();
    }
}

export default Line;
