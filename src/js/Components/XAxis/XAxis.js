import React              from "react";
import { Component }      from "react";
import PropTypes          from "prop-types";
import { select }         from "d3-selection";
import { axisBottom }     from "d3-axis";
import { format }         from "d3-format";
import { ScalesConsumer } from "../Context/";

class XAxis extends Component{
    static contextType = ScalesConsumer;

    static propTypes = {
        createScaleType: PropTypes.func.isRequired
    }

    formatAxisLabels(){
        const { data, aes, x_lab } = this.context;
        const xValue               = data[0][aes[0]];

        if((typeof xValue) === "number" && x_lab)
        {
            select(this.node)
                .selectAll("text")
                .html(d => format(x_lab)(d));
        }
    }

    findXAxis(){
        // first create scale object
        const { aes } = this.context;
        const xScale  = this.props.createScaleType(aes[0], this.constructor.name);

        // ajust x-axis to bottom
        const { dimensions } = this.context;
        const axisLocation   = `translate(0, ${dimensions.height - dimensions.padding})`;

        // select node returned by component and appends x-axis
        select(this.node)
            .attr("transform", axisLocation)
            .call(axisBottom(xScale));

        // color x-axis path
        //select(this.node)
        //    .select("path")
        //    .attr("stroke", "rgb(255, 255, 255)");

        // format x-labels
        this.formatAxisLabels();
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
        this.findXAxis();
    }

    componentDidUpdate(){
        this.findXAxis();
    }
}

export default XAxis;
