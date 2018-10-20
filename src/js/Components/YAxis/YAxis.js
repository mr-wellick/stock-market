import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import { axisLeft }   from "d3-axis";
//import { transition } from "d3-transition";
//import { timeFormat } from "d3-time-format";

class YAxis extends Component{
    static propTypes = {
        scale: PropTypes.func,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number
    }

    findYAxis(){
        let { scale }           = this.props;
        let { height, padding } = this.props;
        let axisLocation        = "translate(" + padding + ",0)";

        // need this to properly display our graph
        scale.range([height - padding, padding]).nice();

        // Append y-axis
        select(this.node)
        //.transition()
        //.delay(200)
        //.duration(300)
            .attr("transform", axisLocation)
            .call(axisLeft(scale));
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
        this.findYAxis();
    }

    componentDidUpdate(){
        this.findYAxis();
    }
}

export default YAxis;
