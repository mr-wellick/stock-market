import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import { axisLeft }   from "d3-axis";
import { axisBottom } from "d3-axis";
import { transition } from "d3-transition";
import { timeFormat } from "d3-time-format";
import "./axis.scss";

class Axis extends Component{
    findScale(){
        let { scale }         = this.props;
        let { width, height } = this.props;
        let { padding }       = this.props;
        let { axis }          = this.props;
        let axisLocation;

        if(axis === "x-axis")
        {
            // Calculate x-axis
            axisLocation = "translate(0," + (height - padding) + ")";
            scale.range([padding, width - padding]).nice();

            // append x-axis
            select(".x-axis")
                .transition()
                .duration(1200)
                .attr("transform", axisLocation)
                .call(
                    axisBottom(scale).tickFormat(timeFormat("%y"))
                );
        }
        else if(axis === "y-axis")
        {
            // Calculate y-axis
            axisLocation = "translate(" + padding + ",0)";
            scale.range([height - padding, padding]).nice();

            // Append y-axis
            select(".y-axis")
                .transition()
                .delay(1000)
                .duration(1200)
                .attr("transform", axisLocation)
                .call(axisLeft(scale));
        }
    }

    render(){
        return(
            <g className={ this.props.axis } ></g>
        );
    }

    componentDidMount(){
        this.findScale();
    }

    componentDidUpdate(){
        this.findScale();
    }
}

Axis.propTypes = {
    scale: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    padding: PropTypes.number,
    axis: PropTypes.string
};

export default Axis;
