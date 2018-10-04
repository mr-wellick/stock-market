import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { Axis }            from "../Axis";
import { Line }            from "../Line";
import { findLinearScale } from "../../Utilities";
import { findTimeScale }   from "../../Utilities";
import "./lineChart.scss";

class LineChart extends Component{
    static propTypes = {
        activeData: PropTypes.object
    }

    state = {
        width: window.innerWidth,
        height: window.innerHeight/1.5,
        padding: 40,
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight/1.5
        });
    }

    render(){
        let { activeData }    = this.props;
        let { width, height } = this.state;
        let { padding }       = this.state;
        let dates;
        let price;

        if(activeData["data"])
        {
            dates = activeData["data"]["dates"];
            price = activeData["data"]["adjustedClose"];
        }
        else
            return null;

        return(
            <svg width={ width } height={ height }>
                <Axis
                    scale={ findTimeScale(dates) }
                    axis={ "x-axis" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                <Axis
                    scale={ findLinearScale(price) }
                    axis={ "y-axis" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                <Line
                    xScale={ findTimeScale(dates) }
                    yScale={ findLinearScale(price) }
                    x={ dates }
                    y={ price }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color={ "orange" }
                />
            </svg>
        );
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
}

export default LineChart;
