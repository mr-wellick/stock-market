import React          from "react";
import { Component }  from "react";
import PropTypes      from "prop-types";
import { select }     from "d3-selection";
import { axisRight }  from "d3-axis";
import { format } from "d3-format";

class YAxis extends Component{
    static propTypes = {
        scale: PropTypes.func,
        width: PropTypes.number,
        padding: PropTypes.number,
        formatType: PropTypes.string
    }

    findYAxis(){
        let { scale }      = this.props;
        let { padding }    = this.props;
        let { width }      = this.props;
        let { formatType } = this.props;
        let axisLocation   = `translate(${width - padding}, 0)`;

        // Append y-axis
        if(!formatType)
        {
            select(this.node)
                .attr("transform", axisLocation)
                .call(axisRight(scale));
        }
        else
        {
            select(this.node)
                .attr("transform", axisLocation)
                .call(axisRight(scale).tickFormat(format(formatType)));
        }
    }

    render(){
        return(
            <g
                ref={ node => this.node = node }
            ></g>
        );
    }

    componentDidMount(){
        this.findYAxis();
    }

    componentDidUpdate(){
        this.findYAxis();
    }
}

export default YAxis;
