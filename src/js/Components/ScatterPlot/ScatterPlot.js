import React, { Component } from "react";
import PropTypes            from "prop-types";
import { select }           from "d3-selection";
import "./scatterPlot.scss";

class ScatterPlot extends Component{

    appendNodes(){
        let { stockData } = this.props.data;
        let adjustedClose = Object.entries(stockData).map( item => item[1]["5. adjusted close"] );

        select(this.node)
            .append("g")
            .selectAll("circle")
            .data(adjustedClose)
            .enter()
            .append("circle");
    }

    render(){
        this.appendNodes();
        return(
            <svg
                ref={ node => this.node = node }
                width="500"
                height="300"
            />
        );
    }
}

ScatterPlot.propTypes = {
    data: PropTypes.object
};

export default ScatterPlot;
