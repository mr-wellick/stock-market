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
        x: PropTypes.array,
        y: PropTypes.array
    }

    formatData = () => {
        let { x, y }     = this.props;
        let dataToRender = [];

        // Need to store data in this format
        for( let i = 0; i < x.length; i++ )
            dataToRender.push([ x[i], y[i] ]);

        return dataToRender;
    }

    getXScale = () => {
        let { xScale } = this.props;
        return xScale;
    }

    getYScale = () => {
        let { yScale } = this.props;
        return yScale;
    }

    getXCoordinate = () => {
        let xCoordinate = mouse(this.node)[0];
        return xCoordinate;
    }

    getXValueFromXCoordinate = () => {
        let xScale      = this.getXScale();
        let xCoordinate = this.getXCoordinate();
        let xValue      = xScale.invert(xCoordinate);
        return xValue;
    }

    mouseMove = () => {
        let xScale    = this.getXScale();
        let yScale    = this.getYScale();
        let data      = this.formatData();
        let xValue    = this.getXValueFromXCoordinate();
        let bisect    = bisector(data => data[0]).left;
        let yPosition = bisect(data, xValue);

        let filteredData = yPosition < (data.length - 1) ?
                data[yPosition] : data[data.length - 1];

        select(this.node)
            .select("circle")
            .attr("transform", "translate(" + xScale(filteredData[0]) + "," + yScale(filteredData[1]) + ")");

        select(this.node)
            .select("text")
            .text(filteredData[1])
            .attr("transform", "translate(" + xScale(filteredData[0]) + "," + yScale(filteredData[1]) + ")");

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
