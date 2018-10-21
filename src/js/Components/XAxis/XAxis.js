import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import { axisBottom } from "d3-axis";
//import { transition } from "d3-transition";
//import { timeFormat } from "d3-time-format";

class XAxis extends Component{
    static propTypes = {
        scale: PropTypes.func,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number
    }

    findXAxis(){
        let { scale, padding } = this.props;
        let { width, height }  = this.props;
        let axisLocation       = "translate(0," + (height - padding) + ")";

        // spreads scale across our graph to disply properly
        scale.range([padding, width - padding]).nice();

        // select node return by component and appends x-axis
        select(this.node)
            .attr("transform", axisLocation)
            .call(axisBottom(scale)/*.tickFormat(timeFormat("%y"))*/);
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
        this.findXAxis();
    }

    componentDidUpdate(){
        this.findXAxis();
    }
}

export default XAxis;