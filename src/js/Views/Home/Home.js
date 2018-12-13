import React                from "react";
import { Component }        from "react";
//import { Loader }           from "../../Components/";
//import { StockMetrics }     from "../../Components/";
//import { Toggler }          from "../../Components/";
//import { StockSelector }    from "../../Components/";
//import { StockDescription } from "../../Components/";
//import { StockNews }        from "../../Components/";
//import { DuplicateEntry }   from "../../Components/";
//import { Errors }           from "../../Components/";
//import { ChartSelector }    from "../../Components/";
//import { ActiveChart }      from "../../Components/";
import "./home.scss";

class Home extends Component{
    state = {
        stockMarketData: [],
        activeIndex: 0,
        errors: "",
        success: "",
        duplicateEntry: "",
        isFetchingData: false,
    }

    resetApplicationMessages(messageType){
        if(messageType === "ERRORS")
            this.setState({ errors: "" });

        if(messageType === "SUCCESS")
            this.setState({ success: "" });

        if(messageType === "duplicateEntry");
            this.setState({ duplicateEntry: "" });
    }

    async fetchStockMarketData(stockName){
        // indicate we are fetching data
        this.setState({ isFetchingData: true });

        const res = await fetch(
            `https://api.iextrading.com/1.0/stock/${
                stockName
            }/batch?types=quote,news,company,stats,financials,relevant,chart&range=5y`
        );

        try{
            // successful request
            const singleStockData = await res.json();
            this.setState({
                stockMarketData: this.state.stockMarketData.push(singleStockData),
                success: `Successfully retrieved: ${stockName}`,
                isFetchingData: false
            });
        }
        catch(err){
            // unsucessful request
            this.setState({
                errors: `Failed to retrieve: ${stockName}`,
                isFetchingData: false
            });
        }
    }

    render(){
        return(
            <section>
            </section>
        );
    }
}

export default Home;
