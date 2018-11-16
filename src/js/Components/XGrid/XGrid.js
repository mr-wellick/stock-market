import React          from "react";
import PropTypes      from "prop-types";
import { Component }  from "react";
import { select }     from "d3-selection";
import { axisBottom } from "d3-axis";
import "./xGrid.scss";

class XGrid extends Component{
    static propTypes = {
        xScale: PropTypes.func,
        padding: PropTypes.number,
        height: PropTypes.number
    }

    createXGridLines(){
        let { xScale } = this.props;
        return axisBottom(xScale).ticks(5);
    }

    appendXGrids(){
        let { padding, height } = this.props;
        let axisPosition        = `translate(0, ${(height - padding)})`;

        select(this.node)
            .attr("class", "grid")
            .attr("transform", axisPosition)
            .call(
                this.createXGridLines()
                .tickSize(-(height - padding*2))
                .tickFormat("")
            );
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
        this.appendXGrids();
    }

    componentDidUpdate(){
        this.appendXGrids();
    }
}

export default XGrid;
