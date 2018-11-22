import React           from "react";
import PropTypes       from "prop-types";
import { Component }   from "react";
import { select }      from "d3-selection";
import { axisLeft }    from "d3-axis";
import { scaleFinder } from "../../Utilities/";
import "./yGrid.scss";

class YGrid extends Component {
    static propTypes = {
        data: PropTypes.array,
        scaleType: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number,
        padding: PropTypes.number
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

    createYGridLines(){
        let  yScale  = this.getYScale();
        return axisLeft(yScale).ticks(5);
    }

    appendYGrids(){
        let { padding, width } = this.props;
        let axisPosition       = `translate(${padding}, 0)`;

        select(this.node)
            .attr("class", "grid")
            .attr("transform", axisPosition)
            .call(this.createYGridLines().tickSize(-(width - padding*2)).tickFormat(""));
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
        this.appendYGrids();
    }

    componentDidUpdate(){
        this.appendYGrids();
    }
}

export default YGrid;
