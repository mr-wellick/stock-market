import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import { bisector }  from "d3-array";
import { mouse }     from "d3-selection";
import { select }    from "d3-selection";
import "./chartToolTip.scss";

class ChartToolTip extends Component{
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        data: PropTypes.array,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
        className: PropTypes.string
    }

    getXValueFromXCoordinate = () => {
        let { xScale }  = this.props;
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
        let { xScale }   = this.props;
        let { yScale }   = this.props;
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
