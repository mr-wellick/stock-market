import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import tip            from "d3-tip";
import "./points.scss";

class Points extends Component{
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        x: PropTypes.array,
        y: PropTypes.array,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
    }

    formatData(){
        let { x, y }     = this.props;
        let dataToRender = [];

        x = x.map(date => new Date(date));
        y = y.map(price => Number(price));

        for(let i = 0; i < x.length; i++)
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

    setToolTip(){
        let toolTip = tip().html(data => {
            return (
                "<div class=\"tooltips\">"
                +
                    "<div class=\"tooltips-date\">" + data[0].toDateString() + "</div>"
                +
                    "<div class=\"tooltips-price\">" + data[1] + "</div>"
                +
                "</div>"
            );
        });
        return toolTip;
    }

    appendCircles(data){
        let { xScale, yScale } = this.props;
        let toolTip            = this.setToolTip();

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
            .attr("r", 3.5)
            .attr("fill", "orange")
            .on("mouseover", toolTip.show)
            .on("mouseout", toolTip.hide);
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
        let dataToRender = this.formatData();
        this.setScaleRanges();
        this.appendCircles(dataToRender);
    }

    componentDidUpdate(){
        let dataToRender = this.formatData();
        this.setScaleRanges();
        this.appendCircles(dataToRender);
    }
}

export default Points;
