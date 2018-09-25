import React               from "react";
import { Component }       from "react";
import PropTypes           from "prop-types";
import { connect }         from "react-redux";
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
        let { successData } = this.props;
        let dates;
        let price;

        if(successData.length > 0){
            dates = successData[0]["processedData"]["dates"];
            price = successData[0]["processedData"]["adjustedClose"];
        }

        if(successData.length === 0)
            return null;

        return(
            <svg width={ this.state.width } height={ this.state.height }>
                <Axis
                    scale={ findTimeScale(dates) }
                    axis={ "x-axis" }
                    width={ this.state.width }
                    height={ this.state.height }
                    padding={ 40 }
                />
                <Axis
                    scale={ findLinearScale(price) }
                    axis={ "y-axis" }
                    width={ this.state.width }
                    height={ this.state.height }
                    padding={ 40 }
                />
                <Line
                    xScale={ findTimeScale(dates) }
                    yScale={ findLinearScale(price) }
                    x={ dates }
                    y={ price }
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
    height: PropTypes.number,
    successData: PropTypes.array
};

let mapState = (state) => {
    return {
        ...state.receivedData
    };
};

export default connect(mapState, null)(LineChart);
