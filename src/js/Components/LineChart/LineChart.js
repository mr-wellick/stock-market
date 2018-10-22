import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { XAxis }           from "../XAxis/";
import { YAxis }           from "../YAxis/";
//import { Line }            from "../Line/";
import { findLinearScale } from "../../Utilities/";
import { findTimeScale }   from "../../Utilities/";
import { Grids }           from "../Grids/";
import { Points }          from "../Points/";
import "./lineChart.scss";

class LineChart extends Component{
    static propTypes = {
        successData: PropTypes.object,
        frequency: PropTypes.string
    }

    state = {
        width: window.innerWidth <= 1000 ? window.innerWidth : window.innerWidth/1.4,
        height: window.innerHeight/1.6,
        padding: 40,
    }

    handleResize = () => {
        if(window.innerWidth <= 1000)
        {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight/1.6
            });
        }
        else if(window.innerWidth > 1000)
        {
            this.setState({
                width: window.innerWidth/1.4,
                height: window.innerHeight/1.6
            });
        }
    }

    render(){
        let { successData }   = this.props;
        let { width, height } = this.state;
        let { padding }       = this.state;
        let dates;
        let price;
        let frequency;

        // empty array gets coerced into a falsy value.
        // won't run when successData is an empty array.
        if(successData)
        {
            dates     = successData["data"]["dates"];
            price     = successData["data"]["adjustedClose"];
            frequency = successData["data"]["frequency"];
        }
        else
            return null;

        return(
            <svg width={ width } height={ height } ref={ node => this.node = node }>
                <Grids
                    scale={ findLinearScale(price)}
                    padding={ padding }
                    width={ width }
                    height={ height }
                />
                <XAxis
                    scale={ findTimeScale(dates) }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    frequency={ frequency }
                />
                <YAxis
                    scale={ findLinearScale(price) }
                    height={ height }
                    padding={ padding }
                />
                {/*<Line
                    xScale={ findTimeScale(dates) }
                    yScale={ findLinearScale(price) }
                    x={ dates }
                    y={ price }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color={ "orange" }
                />*/}
                <Points
                    xScale={ findTimeScale(dates) }
                    yScale={ findLinearScale(price) }
                    x={ dates }
                    y={ price }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    chartRef={ this.node }
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
