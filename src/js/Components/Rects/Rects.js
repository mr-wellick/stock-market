import React           from "react";
import PropTypes       from "prop-types";
import { Component }   from "react";
import { select }      from "d3-selection";
import { scaleFinder } from "../../Utilities/";

class Rects extends Component{
    static propTypes = {
        data: PropTypes.array,
        xScaleType: PropTypes.string,
        yScaleType: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
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
        xScale.range([padding, width - padding]);

        return xScale;
    }

    getYScale(){
        // get y-values
        let { data, yScaleType, height, padding } = this.props;
        let yValues  = data.map(item => item.yValue);

        // create xScale
        let scaleObj  = new scaleFinder([0].concat(yValues)); // Correction: to match corresponding yAxis
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

    appendRects(){
        let { data }  = this.props;
        let { color } = this.props;
        let xScale    = this.getXScale();
        let yScale    = this.getYScale();

        // clear graph for next set of data points if we have data
        if(this.node.children.length > 0)
            select(this.node).selectAll("rect").remove();

        // append new visualization
        select(this.node)
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("width", xScale.bandwidth())
            .attr("height", d => yScale.range()[0] - yScale(d.yValue))
            .attr("x", d => xScale(d.xValue))
            .attr("y", d => yScale(d.yValue))
            .attr("fill", color);
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }
    componentDidMount(){
        this.appendRects();
    }

    componentDidUpdate(){
        this.appendRects();
    }
}

export default Rects;
