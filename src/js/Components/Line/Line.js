import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { line }            from "d3-shape";
import { curveCatmullRom } from "d3-shape";
import { select }          from "d3-selection";
import { transition }      from "d3-transition";
import "./line.scss";

class Line extends Component{
    static propTypes = {
        data: PropTypes.array,
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        color: PropTypes.string
    }

    appendLineToChart(data){
        let { xScale, yScale } = this.props;
        let { color }          = this.props;
        let lineForChart       = line().x(d => xScale(d.xValues)).y(d => yScale(d.yValues)).curve(curveCatmullRom);

        select(this.node)
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
            <g className="line-data">
                <path ref={ node => this.node = node }/>
            </g>
        );
    }

    componentDidMount(){
        this.appendLineToChart(this.props.data);
    }

    componentDidUpdate(){
        this.appendLineToChart(this.props.data);
    }
}

export default Line;
