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
        data: PropTypes.array
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
        let yPosition    = bisector(data => data.xValues).left(data, xValue);
        let filteredData = yPosition < (data.length - 1) ? data[yPosition] : data[data.length - 1];
        return filteredData;
    }

    mouseMove = () => {
        let { xScale }   = this.props;
        let { yScale }   = this.props;
        let filteredData = this.getYValue();

        select(this.node)
            .select("circle")
            .attr("transform", "translate(" + xScale(filteredData.xValues) + "," + yScale(filteredData.yValues) + ")");

        select(this.node)
            .select("text")
            .text(filteredData[1])
            .attr("transform", "translate(" + xScale(filteredData.xValues) + "," + yScale(filteredData.yValues) + ")");
    }

    render(){
        return(
            <g ref={ node => this.node = node } className="stock-price" style={{display: "none"}}>
                <circle r="5"></circle>
                <text></text>
            </g>
        );
    }

    componentDidMount(){
        select(".stock-market-chart")
            .on("mouseover", () => select(".stock-price").style("display", null))
            .on("mouseout", () => select(".stock-price").style("display", "none"))
            .on("mousemove", this.mouseMove);
    }
}

export default ChartToolTip;
