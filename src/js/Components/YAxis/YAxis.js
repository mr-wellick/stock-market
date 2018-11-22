import React           from "react";
import { Component }   from "react";
import PropTypes       from "prop-types";
import { select }      from "d3-selection";
import { axisRight }   from "d3-axis";
import { format }      from "d3-format";
import { scaleFinder } from "../../Utilities/";

class YAxis extends Component{
    static propTypes = {
        data: PropTypes.array,
        scaleType: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
        formatType: PropTypes.string
    }

    getYScale(){
        // get y-values
        let { data, scaleType, height, padding } = this.props;
        let yValues  = data.map(item => item.yValue);

        // create xScale
        let scaleObj  = new scaleFinder(yValues);
        let yScale;

        if(scaleType === "time")
            yScale = scaleObj.getTimeScale();

        if(scaleType === "linear")
            yScale = scaleObj.getLinearScale();

        if(scaleType === "ordinal")
            yScale = scaleObj.getOrdinalScale();

        // set scale range
        yScale.range([(height - padding), padding]).nice();

        return yScale;
    }

    findYAxis(){
        let { padding, width, formatType } = this.props;
        let yScale             = this.getYScale();
        let axisLocation       = `translate(${width - padding}, 0)`;

        // Append y-axis
        if(!formatType)
        {
            select(this.node)
                .attr("transform", axisLocation)
                .call(axisRight(yScale));
        }
        else
        {
            select(this.node)
                .attr("transform", axisLocation)
                .call(axisRight(yScale).tickFormat(format(formatType)));
        }
    }

    render(){
        return(
            <g
                ref={ node => this.node = node }
            >
            </g>
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
