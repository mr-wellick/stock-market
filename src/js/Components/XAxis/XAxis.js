import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import { axisBottom } from "d3-axis";
import { timeFormat } from "d3-time-format";

class XAxis extends Component{
    static propTypes = {
        scale: PropTypes.func,
        height: PropTypes.number,
        padding: PropTypes.number,
        frequency: PropTypes.string
    }

    determineAxisLabel(){
        let { frequency } = this.props;
        if(frequency === "Monthly")
            return timeFormat("%y");
        else
            return timeFormat("%B");
    }

    findXAxis(){
        let { scale, padding } = this.props;
        let { height }         = this.props;
        let axisLocation       = "translate(0," + (height - padding) + ")";

        // select node return by component and appends x-axis
        select(this.node)
            .attr("transform", axisLocation)
            .call(axisBottom(scale)
            .tickFormat(this.determineAxisLabel()));
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