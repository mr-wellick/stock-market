import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import { axisLeft }   from "d3-axis";
import { axisBottom } from "d3-axis";
import { transition } from "d3-transition";
//import { timeFormat } from "d3-time-format";
import "./axis.scss";

class Axis extends Component{
    static propTypes = {
        scale: PropTypes.func,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
        axis: PropTypes.string
    }

    findXAxis(){
        let { scale }         = this.props;
        let { width, height } = this.props;
        let { padding }       = this.props;
        let axisLocation;

        // Calculate x-axis
        axisLocation = "translate(0," + (height - padding) + ")";
        scale.range([padding, width - padding]).nice();

        // Append x-axis
        select(".x-axis")
            .transition()
            .duration(200)
            .attr("transform", axisLocation)
            .call(axisBottom(scale)/*.tickFormat(timeFormat("%y"))*/);
    }

    findYAxis(){
        let { scale }   = this.props;
        let { height }  = this.props;
        let { padding } = this.props;
        let axisLocation;

        // Calculate y-axis
        axisLocation = "translate(" + padding + ",0)";
        scale.range([height - padding, padding]).nice();

        // Append y-axis
        select(".y-axis")
            .transition()
            .delay(200)
            .duration(300)
            .attr("transform", axisLocation)
            .call(axisLeft(scale));
    }

    render(){
        return(
            <g className={ this.props.axis } ></g>
        );
    }

    componentDidMount(){
        let { axis } = this.props;

        if(axis === "x-axis")
            this.findXAxis();
        else if(axis === "y-axis")
            this.findYAxis();
    }

    componentDidUpdate(){
        let { axis } = this.props;

        if(axis === "x-axis")
            this.findXAxis();
        else if(axis === "y-axis")
            this.findYAxis();
    }
}

export default Axis;
