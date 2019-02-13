import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import { GGPLOT }    from "react-d3-ggplot";
import { Line }      from "react-d3-ggplot";

class HistoricalChart extends Component{
    static propTypes = {
        stockMarketData: PropTypes.array,
        activeIndex: PropTypes.number,
        dimensions: PropTypes.object
    }

    formatData(){
        const activeDataSet = this.props.stockMarketData[this.props.activeIndex]["chart"];
        const formattedData = activeDataSet.map(item => ({
            ...item,
            date: new Date(item.date)
        }));

        return formattedData;
    }

    render(){
        if(this.props.stockMarketData.length === 0)
            return null;

        return(
            <GGPLOT
                data={ this.formatData() }
                aes={ ["date", "close"] }
                dimensions={ this.props.dimensions }
            >
                <Line/>
            </GGPLOT>
        );
    }
}

export default HistoricalChart;
