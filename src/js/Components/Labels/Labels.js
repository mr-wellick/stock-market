import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { select }    from "d3-selection";
import "./labels.scss";

class Labels extends Component{
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number
    }

    addXLabel(){
        let { width,height } = this.props;
        let { padding }      = this.props;

        select(this.node)
            .attr("class", "x-label")
            .append("text")
            .attr("x", (width - padding*2))
            .attr("y", (height - padding*1.5))
            .text("Time");
    }

    addYLabel(){
        let { padding } = this.props;

        select(this.node)
            .attr("class", "y-label")
            .append("text")
            .attr("x", padding*1.5)
            .attr("y", padding*1.5)
            .text("Price");
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
