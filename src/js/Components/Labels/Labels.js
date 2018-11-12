import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { select }    from "d3-selection";
import "./labels.scss";

class Labels extends Component{
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number,
        xLabel: PropTypes.string,
        yLabel: PropTypes.string,
    }

    addXLabel(){
        let { width,height } = this.props;
        let { padding }      = this.props;
        let { xLabel }       = this.props;

        select(this.node)
            .attr("class", "x-label")
            .append("text")
            .attr("x", (width - padding*2))
            .attr("y", (height - padding*1.5))
            .text(xLabel);
    }

    addYLabel(){
        let { padding } = this.props;
        let { yLabel }  = this.props;

        select(this.node)
            .attr("class", "y-label")
            .append("text")
            .attr("x", padding*1.5)
            .attr("y", padding*1.5)
            .text(yLabel);
    }

    render(){
        return(
            <g ref={ node => this.node = node }></g>
        );
    }

    componentDidMount(){
        this.addXLabel();
        this.addYLabel();
    }

    componentDidUpdate(){
        // remove old text nodes before updating
        if(this.node.children.length > 0)
            select(this.node).selectAll("text").remove();

        // add new text nodes
        this.addXLabel();
        this.addYLabel();
    }
}

export default Labels;
