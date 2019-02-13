import React             from "react";
import { Component }     from "react";
import { GGPLOT }        from "react-d3-ggplot";
import { Rects }         from "react-d3-ggplot";
import { NoChartToShow } from "../NoChartToShow/";

class BarPlot extends Component {
    formatData(){
        const { stockMarketData } = this.props;

        const formattedData = stockMarketData.map(item => ({
            symbol: item["quote"]["symbol"],
            marketCap: item["quote"]["marketCap"]
        }));

        return formattedData;
    }

    render(){
        if(this.props.stockMarketData.length === 1)
            return(
                <NoChartToShow
                    { ...this.props.dimensions }
                    message={ "You need at least two stocks for comparisons." }
                />
            );

        return(
            <GGPLOT
                data={ this.formatData() }
                aes={ ["symbol", "marketCap"] }
                dimensions={ this.props.dimensions }
            >
                <Rects opacity="0.7"/>
            </GGPLOT>
        );
    }
}

export default BarPlot;