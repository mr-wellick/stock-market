import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { Axis }            from "../Axis";
import { Line }            from "../Line";
import { findLinearScale } from "../../Utilities";
import { findTimeScale }   from "../../Utilities";
import "./lineChart.scss";

class LineChart extends Component{

    state = {
        width: window.innerWidth,
        height: window.innerHeight/1.5
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight/1.5
        });
    }

    render(){
        return(
            <svg width={ this.state.width } height={ this.state.height }>
                <Axis
                    scale={ findTimeScale(["2010-01-01", "2015-01-01"]) }
                    axis={ "x-axis" }
                    width={ this.state.width }
                    height={ this.state.height }
                    padding={ 40 }
                />
                <Axis
                    scale={ findLinearScale([0, 100]) }
                    axis={ "y-axis" }
                    width={ this.state.width }
                    height={ this.state.height }
                    padding={ 40 }
                />
                <Line
                    xScale={ findTimeScale(["2010-01-01", "2015-01-01"]) }
                    yScale={ findLinearScale([0, 100]) }
                    x={ ["2010-01-01", "2015-01-01"] }
                    y={ [5, 75] }
                    width={ this.state.width }
                    height={ this.state.height }
                    padding={ 40 }
                    color={ "orange" }
                />
            </svg>
        );
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
}

LineChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

export default LineChart;
