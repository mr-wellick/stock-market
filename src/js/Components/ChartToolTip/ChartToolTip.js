import React           from "react";
import PropTypes       from "prop-types";
import { Component }   from "react";
import { bisector }    from "d3-array";
import { mouse }       from "d3-selection";
import { select }      from "d3-selection";
import { scaleFinder } from "../../Utilities/";
import "./style.scss";

class ChartToolTip extends Component{
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        xScaleType: PropTypes.string,
        yScaleType: PropTypes.string,
        data: PropTypes.array,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
        className: PropTypes.string
    }

    getXScale(){
        // get props
        let { width, padding, data, xScaleType } = this.props;

        // get x-values
        let xValues  = data.map(item => item.xValue);
        let scaleObj = new scaleFinder(xValues);
        let xScale;

        if(xScaleType === "time")
            xScale = scaleObj.getTimeScale();

        if(xScaleType === "linear")
            xScale = scaleObj.getLinearScale();

        if(xScaleType === "ordinal")
            xScale = scaleObj.getOrdinalScale(0.5); // pass in binWidth

        // set scale range
        xScale.range([padding, width - padding]).nice();

        return xScale;
    }

    getYScale(){
        // get y-values
        let { data, yScaleType, height, padding } = this.props;
        let yValues  = data.map(item => item.yValue);

        // create xScale
        let scaleObj  = new scaleFinder(yValues);
        let yScale;

        if(yScaleType === "time")
            yScale = scaleObj.getTimeScale();

        if(yScaleType === "linear")
            yScale = scaleObj.getLinearScale();

        if(yScaleType === "ordinal")
            yScale = scaleObj.getOrdinalScale();

        // set scale range
        yScale.range([(height - padding), padding]).nice();

        return yScale;
    }

    getXValueFromXCoordinate = () => {
        let xScale      = this.getXScale();
        let xCoordinate = mouse(this.node)[0];
        let xValue      = xScale.invert(xCoordinate);
        return xValue;
    }

    getYValue = () => {
        let { data }     = this.props;
        let xValue       = this.getXValueFromXCoordinate();
        let yPosition    = bisector(data => data.xValue).left(data, xValue);
        let filteredData = yPosition < (data.length - 1) ? data[yPosition] : data[data.length - 1];
        return filteredData;
    }

    mouseMove = () => {
        let xScale       = this.getXScale();
        let yScale       = this.getYScale();
        let filteredData = this.getYValue();

        select(".price-position")
            .attr("transform", `translate(${xScale(filteredData.xValue)}, ${yScale(filteredData.yValue)})`);

        select(".stock-price")
            .text(`Price: $${filteredData.yValue}`)
            .attr("transform", "translate(50, 70)");

        select(".stock-date")
            .text(`Date: ${filteredData.xValue.toDateString()}`)
            .attr("transform", `translate(${this.props.width - this.props.padding*5}, 70)`);

        select(".x-line")
            .attr("x1", xScale(filteredData.xValue))
            .attr("y1", this.props.padding)
            .attr("x2", xScale(filteredData.xValue))
            .attr("y2", this.props.height - this.props.padding);

        select(".y-line")
            .attr("x1", this.props.padding)
            .attr("y1", yScale(filteredData.yValue))
            .attr("x2", this.props.width - this.props.padding)
            .attr("y2", yScale(filteredData.yValue));
    }

    render(){
        return(
            <g ref={ node => this.node = node } className="stock-info" style={{display: "none"}}>
                <circle className="price-position" r="5"></circle>
                <text className="stock-price"></text>
                <text className="stock-date"></text>
                <line className="x-line" stroke="black" strokeDasharray="2"></line>
                <line className="y-line" stroke="black" strokeDasharray="2"></line>
            </g>
        );
    }

    componentDidMount(){
        select("." + this.props.className)
            .on("mouseover", () => select(".stock-info").style("display", null))
            .on("mouseout", () => select(".stock-info").style("display", "none"))
            .on("mousemove", this.mouseMove);
    }
}

export default ChartToolTip;
