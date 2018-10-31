import React           from "react";
import PropTypes       from "prop-types";
import { Component }   from "react";
import { connect }     from "react-redux";
import ScaleFinder     from "../../Redux/Actions/Utilities/ScaleFinder.js";
import { XAxis }       from "../XAxis/";
import { YAxis }       from "../YAxis/";
import { Points }      from "../Points/";
import { scaleLinear } from "d3-scale";
import tip             from "d3-tip";
import mean            from "lodash.mean";
import sum             from "lodash.sum";
import "./riskReturnChart.scss";

class RiskReturnChart extends Component{
    static propTypes = {
        successData: PropTypes.array
    }

    state = {
        width: window.innerWidth <= 1000 ? window.innerWidth : window.innerWidth/1.4,
        height: window.innerHeight/1.6,
        padding: 60
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
    
    getStockNames(){
        let { successData } = this.props;
        let stockNames      = successData.map(dataSet => dataSet["data"]["stockName"]);

        return stockNames;
    }

    getMinDataSetLength(){
        let { successData }     = this.props;
        let dataSetLengths      = successData.map(dataSet => dataSet["data"]["percentChange"].length);
        let minLengthOfDataSets = Math.min(...dataSetLengths);

        return minLengthOfDataSets;
    }

    getDatesWithNewLength(){
        let { successData } = this.props;
        let newLength       = this.getMinDataSetLength();
        let dates           = successData.map(dataSet => dataSet["data"]["dates"].slice(0, newLength));

        return dates;
    }

    getPercentChangeWithNewLength(){
        let { successData } = this.props;
        let newLength       = this.getMinDataSetLength();
        let prices          = successData.map(dataSet => dataSet["data"]["percentChange"].slice(0, newLength));

        return prices;
    }

    getMean(){
        let means = this.getPercentChangeWithNewLength().map(data => mean(data));
        return means;
    }

    getSD(){
        let newLength         = this.getMinDataSetLength();
        let means             = this.getMean();
        let percentChange     = this.getPercentChangeWithNewLength();
        let placeHolder       = [];
        let sd                = [];

        for(let i = 0; i < means.length; i++)
        {
            for(let j = 0; j < newLength; j++)
            {
                placeHolder.push(
                    Math.pow((percentChange[i][j] - means[i]), 2)
                );
            }
            sd.push(Math.sqrt(sum(placeHolder)/(newLength - 1)));
            placeHolder = [];
        }

        return sd;
    }

    composeNewData(){
        let { successData } = this.props;
        let newData         = [];
        for(let i = 0; i < successData.length; i++)
        {
            newData.push({
                stockName: this.getStockNames()[i],
                percentChange: this.getPercentChangeWithNewLength()[i],
                dates: this.getDatesWithNewLength()[i],
                mean: this.getMean()[i],
                sd: this.getSD()[i]
            });
        }

        return newData;
    }

    setXScale(){
        let sdData   = this.getSD();
        let scaleObj = new ScaleFinder(sdData);
        let xScale   = scaleObj.getScale(scaleLinear);
        xScale.range([this.state.padding, this.state.width - this.state.padding]).nice();
        
        return xScale;
    }
    
    setYScale(){
        let meanData = this.getMean();
        let scaleObj = new ScaleFinder(meanData);
        let yScale   = scaleObj.getScale(scaleLinear);
        yScale.range([(this.state.height - this.state.padding), this.state.padding]).nice();

        return yScale;
    }

    setToolTip(){
        let toolTip = tip().html(data => {
            let sd   = data[0];
            let mean = data[1];
            return (
                `<div class="tooltips">
                    <div class="tooltips-sd">Standard Deviation: ${sd.toFixed(2)}</div>
                    <div class="tooltips-mean">Returns: ${mean.toFixed(2)}</div>
                </div>`
            );
        });
        return toolTip;
    }

    render(){
        return(
            <svg width={ this.state.width } height={ this.state.height }>
                <XAxis
                    scale={ this.setXScale() }
                    height={ this.state.height }
                    padding={ this.state.padding }
                />
                <YAxis
                    scale= { this.setYScale() }
                    padding={ this.state.padding }
                />
                <Points
                    xScale={ this.setXScale() }
                    yScale={ this.setYScale() }
                    x={ this.getSD() }
                    y={ this.getMean() }
                    color={ "crimson" }
                    toolTip={ this.setToolTip() }
                    className={ "risk-return" }
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

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(RiskReturnChart);