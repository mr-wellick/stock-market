import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { XAxis }           from "../XAxis/";
import { YAxis }           from "../YAxis/";
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
                <XAxis
                    scale={ findTimeScale(dates) }
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                <YAxis
                    scale={ findLinearScale(price) }
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
