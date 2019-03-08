import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { line }            from "d3-shape";
import { curveCatmullRom } from "d3-shape";
import { select }          from "d3-selection";
import { ScalesConsumer }  from "../Context/";

class Line extends Component {
    static contextType = ScalesConsumer;

    static defaultProps = {
        color: "black",
        opacity: 1,
        lineWidth: 1
    }

    static propTypes = {
        color: PropTypes.string,
        lineWidth: PropTypes.number,
        opacity: PropTypes.any,
        createScaleType: PropTypes.func
    }

    createLine() {
        const { aes } = this.context;
        const xScale  = this.props.createScaleType(aes[0], "XAxis"); // We need to pass in XAxis & YAxis
        const yScale  = this.props.createScaleType(aes[1], "YAxis"); // to properly display the line visually.

        // create line for chart
        const chartLine = line()
            .x(d => xScale(d[aes[0]]))
            .y(d => yScale(d[aes[1]]))
            .curve(curveCatmullRom);

        return chartLine;
    }

    appendLine() {
        const { color, lineWidth, opacity } = this.props;
        const { data }                      = this.context;
        const lineToAppend                  = this.createLine();

        // append line to plot
        select(this.node)
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", color)
            .attr("stroke-width", lineWidth)
            .attr("d", lineToAppend)
            .attr("opacity", opacity);
    }

    render() {
        return(
            <g> 
                <path ref={ node => this.node = node }/>
            </g>
        );
    }

    componentDidMount() {
        this.appendLine();
    }

    componentDidUpdate() {
        this.appendLine();
    }
}

export default Line;
