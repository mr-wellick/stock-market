import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import { axisLeft }   from "d3-axis";
//import { timeFormat } from "d3-time-format";

class YAxis extends Component{
    static propTypes = {
        scale: PropTypes.func,
        padding: PropTypes.number
    }

    findYAxis(){
        let { scale }    = this.props;
        let { padding }  = this.props;
        let axisLocation = "translate(" + padding + ",0)";

        // Append y-axis
        select(this.node)
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