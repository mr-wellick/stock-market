import React              from "react";
import { Component }      from "react";
import PropTypes          from "prop-types";
import { select }         from "d3-selection";
import { axisLeft }       from "d3-axis";
import { axisBottom }     from "d3-axis";
import { WithDimensions } from "../../HOC"; // Used to add width, height, padding
import "./axis.scss";



class __Axis__ extends Component{

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
                .attr("transform", axisLocation)
                .call(axisBottom(scale));
        }
        else if(axis === "y-axis")
        {
            // Calculate y-axis
            axisLocation = "translate(" + padding + ",0)";
            scale.range([height - padding, padding]).nice();

            // Append y-axis
            select(".y-axis")
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
}

__Axis__.propTypes = {
    scale: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    padding: PropTypes.number,
    axis: PropTypes.string
};

// Add width, height, padding
let Axis = WithDimensions(__Axis__);

export default Axis;
