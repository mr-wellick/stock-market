import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import { axisLeft }   from "d3-axis";
import { axisBottom } from "d3-axis";
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
            select(this.node)
                .attr("transform", axisLocation)
                .call(axisBottom(scale));
        }
        else if(axis === "y-axis")
        {
            // Calculate y-axis
            axisLocation = "translate(" + padding + ",0)";
            scale.range([height - padding, padding]).nice();

            // Append y-axis
            select(this.node)
                .attr("transform", axisLocation)
                .call(axisLeft(scale));
        }
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
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
