import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import "./points.scss";

class Points extends Component{
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        x: PropTypes.array,
        y: PropTypes.array,
        color: PropTypes.string,
        toolTip: PropTypes.func
    }

    formatData(){
        let { x, y }     = this.props;
        let dataToRender = [];

        for(let i = 0; i < x.length; i++)
            dataToRender.push([ x[i], y[i] ]);

        return dataToRender;
    }

    appendCircles(data){
        let { xScale, yScale } = this.props;
        let { color }          = this.props;
        let { toolTip }        = this.props;

        // clear graph for next set of data points if we have data
        if(this.node.children.length > 0)
            select(this.node).selectAll("circle").remove();

        // append new visualization
        select(this.node)
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .call(toolTip) // add toolTip
            .attr("cx", d => xScale(d[0]))
            .attr("cy", d => yScale(d[1]))
            .attr("r", 5)
            .attr("fill", color)
            .attr("opacity", "0")
            .on("mouseover", toolTip.show)
            .on("mouseout", toolTip.hide);
    }

    render(){
        return(
            <g ref={ node => this.node = node } className="points-container"></g>
        );
    }

    componentDidMount(){
        let dataToRender = this.formatData();
        this.appendCircles(dataToRender);
    }

    componentDidUpdate(){
        let dataToRender = this.formatData();
        this.appendCircles(dataToRender);
    }
}

export default Points;