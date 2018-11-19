import React           from "react";
import PropTypes       from "prop-types";
import { Component }   from "react";
import { YGrid }       from "../YGrid/";
import { YAxis }       from "../YAxis/";
import { XAxis }       from "../XAxis/";
import { Rects }       from "../Rects/";
import { scaleFinder } from "../../Utilities/";
import { scaleLinear } from "d3-scale";
import { scaleBand }   from "d3-scale";

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

    setXScale(){
        // get x-values
        let symbols = this.formatData().map(item => item.xValue);

        // create xScale
        let xScale = scaleBand().domain(symbols).padding([.5]);

        // set scale range
        let { padding, width } = this.props;
        xScale.range([padding, width - padding], 0.5);

        return xScale;
    }

    setYScale(){
        // get y-values
        let marketCap = this.formatData().map(item => item.yValue);

        // create xScale
        let scaleObj = new scaleFinder(marketCap);
        let yScale   = scaleObj.getScale(scaleLinear);

        // set scale range
        let { height, padding } = this.props;
        yScale.range([(height - padding), padding]).nice();

        return yScale;
    }


    render(){
        let { width, height, padding } = this.props;
        if(this.props.stockData.length === 1)
            return (
                <svg width={ width } height={ height }>
                    <rect
                        x="40"
                        width="100%"
                        height="100%"
                        fill="black"
                        fillOpacity="0.2"
                    >
                    </rect>
                    <text
                        textAnchor="start"
                        x={ width*.15 }
                        y={ height/2 }
                    >
                        You need at least two stocks to view Market Caps.
                    </text>
                </svg>
            );

        return(
            <svg width={ width } height={ height }>
                <YGrid
                    yScale={ this.setYScale()}
                    padding={ padding }
                    width={ width }
                />
                <XAxis
                    scale={ this.setXScale() }
                    height={ height }
                    padding={ padding }
                />
                <YAxis
                    scale={ this.setYScale() }
                    width={ width }
                    padding={ padding }
                    formatType=".0s"
                />
                <Rects
                    xScale={ this.setXScale() }
                    yScale={ this.setYScale() }
                    data={ this.formatData() }
                    color="crimson"
                />
            </svg>
        );
    }
}

export default Histogram;
