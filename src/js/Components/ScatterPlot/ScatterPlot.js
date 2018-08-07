import React, { Component } from "react";
import "./scatterPlot.scss";

class ScatterPlot extends Component{
    render(){
        return(
            <svg
                ref={ node => this.node = node }
                width="500"
                height="300"
            />
        );
    }
}

export default ScatterPlot;
