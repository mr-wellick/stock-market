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
        successData: PropTypes.object
    }

    state = {
        width: window.innerWidth/1.4,
        height: window.innerHeight/1.6,
        padding: 40,
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth/1.4,
            height: window.innerHeight/1.6
        });
    }

    render(){
        let { successData }   = this.props;
        let { width, height } = this.state;
        let { padding }       = this.state;
        let dates;
        let price;

        // empty array gets coerced into a falsy value.
        // won't run when successData is an empty array.
        if(successData)
        {
            dates = successData["data"]["dates"];
            price = successData["data"]["adjustedClose"];
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
