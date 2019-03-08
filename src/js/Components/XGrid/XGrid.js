import React              from "react";
import { Component }      from "react";
import PropTypes          from "prop-types";
import { ScalesConsumer } from "../Context/";
import { select }         from "d3-selection";
import { axisBottom }     from "d3-axis";

class XGrid extends Component {
    static contextType = ScalesConsumer;

    static propTypes = {
        createScaleType: PropTypes.func
    }

    createXGridLines(){
        // create new xScale
        const { aes } = this.context;
        const xScale  = this.props.createScaleType(aes[0], this.constructor.name);

        // find grid line locations
        const { dimensions } = this.context;
        const axisPosition   = `translate(0, ${(dimensions.height - dimensions.padding)})`;

        // append XGrid lines
        select(this.node)
            .attr("transform", axisPosition)
            .call(
                axisBottom(xScale)
                .ticks(4)
                .tickSize(-(dimensions.height - dimensions.padding*2))
                .tickFormat("")
            );

        // color grid lines
        select(this.node)
            .selectAll("g")
            .selectAll("line")
            .attr("stroke", "rgb(255, 255, 255)");
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
        this.createXGridLines();
    }

    componentDidUpdate(){
        this.createXGridLines();
    }
}

export default XGrid;
