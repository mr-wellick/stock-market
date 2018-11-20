import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";

class NoChartToShow extends Component{
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        message: PropTypes.string
    }

    render(){
        let { width, height, message } = this.props;

        return(
            <svg width={ width } height={ height }>
                <rect
                    x="40"
                    y="40"
                    width="90%"
                    height="85%"
                    fill="black"
                    fillOpacity="0.2"
                >
                </rect>
                <text
                    textAnchor="start"
                    x={ width*.15 }
                    y={ height/2 }
                >
                    { message }
                </text>
            </svg>
        );
    }
}

export default NoChartToShow;
