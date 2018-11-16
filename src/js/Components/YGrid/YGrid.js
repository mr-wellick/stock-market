import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import { select }    from "d3-selection";
import { axisLeft }  from "d3-axis";
import "./yGrid.scss";

class YGrid extends Component {
    static propTypes = {
        yScale: PropTypes.func,
        padding: PropTypes.number,
        width: PropTypes.number
    }

    createYGridLines(){
        let { yScale } = this.props;
        return axisLeft(yScale).ticks(5);
    }

    appendYGrids(){
        let { padding, width } = this.props;
        let axisPosition       = `translate(${padding}, 0)`;

        select(this.node)
            .attr("class", "grid")
            .attr("transform", axisPosition)
            .call(this.createYGridLines().tickSize(-(width - padding*2)).tickFormat(""));
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
        this.appendYGrids();
    }

    componentDidUpdate(){
        this.appendYGrids();
    }
}

export default YGrid;
