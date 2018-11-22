import React            from "react";
import PropTypes        from "prop-types";
import { Component }    from "react";
//import { YGrid }        from "../YGrid/";
import { XAxis }        from "../XAxis/";
import { YAxis }        from "../YAxis/";
import { Line }         from "../Line/";
import { ChartToolTip } from "../ChartToolTip/";
import "./historicalChart.scss";

class HistoricalChart extends Component{
    static propTypes = {
        stockData: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number,
        padding: PropTypes.number
    }

    formatData(){
        let { chart } = this.props.stockData;
        let data      = chart.map(item => ({
            xValue: new Date(item["date"]),
            yValue: Number(item["close"])
        }));

        return data;
    }

    render(){
        let { width, height, padding } = this.props;

        // empty array gets coerced into a falsy value.
        if(!this.props.stockData)
            return null;

        return(
            <svg width={ width } height={ height } className="stock-market-chart">
                { /*
                <YGrid
                    yScale={ this.setYScale()}
                    padding={ padding }
                    width={ width }
                />
                    */ }
                <YAxis
                    data={ this.formatData() }
                    scaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                <XAxis
                    data={ this.formatData() }
                    scaleType={ "time" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                />
                <Line
                    data={ this.formatData() }
                    xScaleType={ "time" }
                    yScaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color={ "orange" }
                />
                <ChartToolTip
                    data={ this.formatData() }
                    xScaleType={ "time" }
                    yScaleType={ "linear" }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    className="stock-market-chart"
                />
            </svg>
        );
    }
}

export default HistoricalChart;
