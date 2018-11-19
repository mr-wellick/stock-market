import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import { select }    from "d3-selection";

class Rects extends Component{
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        data: PropTypes.array,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
        color: PropTypes.string
    }

    appendRects(){
        let { xScale, yScale } = this.props;
        let { data }           = this.props;
        //let { height }         = this.props;
        //let { width }          = this.props;
        //let { padding }        = this.props;
        let { color }          = this.props;

        // clear graph for next set of data points if we have data
        if(this.node.children.length > 0)
            select(this.node).selectAll("rect").remove();

        // append new visualization
        select(this.node)
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("width", 20)
            .attr("x", d => xScale(d.xValue))
            .attr("y", d => yScale(d.yValue))
            .attr("height", d => yScale.range()[0] - yScale(d.yValue))
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
