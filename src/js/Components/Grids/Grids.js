import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import { select }    from "d3-selection";
import { axisLeft }  from "d3-axis";
import "./grids.scss";

class Grids extends Component{
    static propTypes = {
        scale: PropTypes.func,
        padding: PropTypes.number,
        width: PropTypes.number
    }

    createYGridLines(){
        let { scale } = this.props;
        return axisLeft(scale).ticks(5);
    }

    appendGrids(){
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
        this.appendGrids();
    }

    componentDidUpdate(){
        this.appendGrids();
    }
}

export default Grids;
