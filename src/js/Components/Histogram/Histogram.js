import React             from "react";
import PropTypes         from "prop-types";
import { Component }     from "react";
import { YGrid }         from "../YGrid/";
import { YAxis }         from "../YAxis/";
import { XAxis }         from "../XAxis/";
import { Rects }         from "../Rects/";
import { NoChartToShow } from "../NoChartToShow/";

class Histogram extends Component{
    static propTypes = {
        stockData: PropTypes.array,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number
    }

    formatData(){
        let { stockData } = this.props;
        let data          = stockData.map(item => ({
            xValue: item["stats"]["symbol"],
            yValue: Number(item["stats"]["marketcap"])
        }));

        return data;
    }

    render(){
        let { width, height, padding, stockData } = this.props;
        if(stockData.length === 1)
            return(
                <NoChartToShow
                    width={ width }
                    height={ height }
                    message={ "You need at least two stocks for comparisons." }
                />
            );

        return(
            <svg width={ width } height={ height }>
                <YGrid
                    data={ this.formatData() }
                    scaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                <YAxis
                    data={ this.formatData().concat({ yValue: 0 }) } // Correction: so we always have 0 in yAxis.
                    scaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    formatType=".0s"
                />
                <XAxis
                    data={ this.formatData() }
                    scaleType={ "ordinal" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                <Rects
                    data={ this.formatData() }
                    xScaleType={ "ordinal" }
                    yScaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color={ "crimson" }
                />
            </svg>
        );
    }
}

export default Histogram;
