import React           from "react";
import PropTypes       from "prop-types";
import { Component }   from "react";
//import { YGrid }       from "../YGrid/";
//import { XGrid }       from "../XGrid/";
import { YAxis }       from "../YAxis/";
import { XAxis }       from "../XAxis/";
import { Rects }       from "../Rects/";
import { scaleFinder } from "../../Utilities/";
import { scaleLinear } from "d3-scale";
import { scaleBand }   from "d3-scale";

class Histogram extends Component{
    static propTypes = {
        stockData: PropTypes.array
    }

    state = {
        width: window.innerWidth*0.80,
        height: window.innerHeight*0.79,
        padding: 70,
    }

    handleChartResize = () => {
        this.setState({
            width: window.innerWidth*0.80,
            height: window.innerHeight*0.79
        });
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
        let xScale = scaleBand().domain(symbols);

        // set scale range
        let { padding, width } = this.state;
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
        let { height, padding } = this.state;
        yScale.range([(height - padding), padding]).nice();

        return yScale;
    }


    render(){
        let { width, height, padding } = this.state;
        if(this.props.stockData.length === 1)
            return null;

        return(
            <svg width={ width } height={ height }>
                {/*
                <YGrid
                    yScale={ this.setYScale()}
                    padding={ padding }
                    width={ width }
                />
                <XGrid
                    xScale={ this.setXScale() }
                    padding={ padding }
                    height={ height }
                />
                */}
                <XAxis
                    scale={ this.setXScale() }
                    height={ height }
                    padding={ padding }
                />
                <YAxis
                    scale={ this.setYScale() }
                    width={ width }
                    padding={ padding }
                />
                <Rects
                    xScale={ this.setXScale() }
                    yScale={ this.setYScale() }
                    data={ this.formatData() }
                    width={ width }
                    height={ height }
                    padding={ padding }
                    color="crimson"
                />
            </svg>
        );
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleChartResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleChartResize);
    }
}

export default Histogram;
