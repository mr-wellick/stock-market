import React          from "react";
import PropTypes      from "prop-types";
import { Component }  from "react";
import { axisBottom } from "d3-axis";
import { select }     from "d3-selection";

class Grids extends Component{
    static propTypes = {
        xScale: PropTypes.func,
        height: PropTypes.number,
        padding: PropTypes.number
    }

    makeXGridLines(){
        let { xScale } = this.props;
        return axisBottom(xScale);
    }

    appendGridLines(){
        let { height, padding } = this.props;

        select(this.node)
            .attr("class", "grid")
            .attr("transform", "translate(0," + (height - padding) + ")")
            .call(this.makeXGridLines().tickSize(-(height - 100)).tickFormat(""));
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
        this.appendGridLines();
    }

    componentDidUpdate(){
        this.appendGridLines();
    }
}

export default Grids;
