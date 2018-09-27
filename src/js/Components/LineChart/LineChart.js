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
        let { activeStockData } = this.props;
        let { successData }     = this.props;
        let { width, height }   = this.state;
        let { padding }         = this.state;
        let dates;
        let price;

        if(successData.length > 0)
        {
            dates = activeStockData["processedData"]["dates"];
            price = activeStockData["processedData"]["adjustedClose"];
        }
        else if(successData.length === 0)
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

LineChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    activeStockData: PropTypes.object,
    successData: PropTypes.array
};

let mapState = (state) => {
    return {
        ...state.userInteraction,
        ...state.receivedData
    };
};

export default connect(mapState, null)(LineChart);
