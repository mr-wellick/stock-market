import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { connect }    from "react-redux";
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
                .duration(1000)
                .attr("transform", axisLocation);

            // Format ticks based on daily or monthly data
            if(this.props.assetType === "function=TIME_SERIES_MONTHLY_ADJUSTED&")
            {
                select(".x-axis")
                    .call(
                        axisBottom(scale).tickFormat(timeFormat("%y"))
                    );
            }
            else if(this.props.assetType === "function=TIME_SERIES_DAILY_ADJUSTED&")
            {
                select(".x-axis")
                    .call(
                        axisBottom(scale).tickFormat(timeFormat("%b"))
                    );
            }
        }
        else if(axis === "y-axis")
        {
            // Calculate y-axis
            axisLocation = "translate(" + padding + ",0)";
            scale.range([height - padding, padding]).nice();

            // Append y-axis
            select(".y-axis")
                .transition()
                .delay(800)
                .duration(1000)
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
    axis: PropTypes.string,
    assetType: PropTypes.string
};

let mapState = (state) => {
    return {
        ...state.userInteraction
    };
};

export default connect(mapState, null)(Axis);
