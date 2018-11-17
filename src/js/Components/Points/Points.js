import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import "./points.scss";

class Points extends Component{
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        data: PropTypes.array,
        color: PropTypes.string
    }

    appendCircles(){
        let { xScale, yScale } = this.props;
        let { data }           = this.props;
        let { color }          = this.props;

        // clear graph for next set of data points if we have data
        if(this.node.children.length > 0)
            select(this.node).selectAll("circle").remove();

        // append new visualization
        select(this.node)
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => xScale(d.xValue))
            .attr("cy", d => yScale(d.yValue))
            .attr("r", 5)
            .attr("fill", color);
    }

    render(){
        return(
            <g
                ref={ node => this.node = node }
            >
            </g>
        );
    }

    componentDidMount(){
        this.appendCircles();
    }

    componentDidUpdate(){
        this.appendCircles();
    }
}

export default Points;
