import React           from "react";
import { Component }   from "react";
import PropTypes       from "prop-types";
import { select }      from "d3-selection";
import { axisBottom }  from "d3-axis";
import { scaleFinder } from "../../Utilities/";

class XAxis extends Component{
    static propTypes = {
        data: PropTypes.array,
        scaleType: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
    }

    getXScale(){
        // get props
        let { width, padding, data, scaleType } = this.props;

        // get x-values
        let xValues  = data.map(item => item.xValue);
        let scaleObj = new scaleFinder(xValues);
        let xScale;

        if(scaleType === "time")
            xScale = scaleObj.getTimeScale();

        if(scaleType === "linear")
            xScale = scaleObj.getLinearScale();

        if(scaleType === "ordinal")
            xScale = scaleObj.getOrdinalScale(0.5); // pass in binWidth

        // set scale range
        xScale.range([padding, width - padding]);

        return xScale;
    }

    findXAxis(){
        let { padding, height } = this.props;
        let xScale              = this.getXScale();
        let axisLocation        = `translate(0, ${height - padding})`;

        // select node returned by component and appends x-axis
        select(this.node)
            .attr("transform", axisLocation)
            .call(axisBottom(xScale));
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
