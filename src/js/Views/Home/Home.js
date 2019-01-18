import React                   from "react";
import { Component }           from "react";
import { StockMarketProvider } from "../../Context/stockMarketContext.js";
import { InputStock }          from "../../Components/";
//import { StockMetrics }        from "../../Components/";
//import { Loader }           from "../../Components/";
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
    render(){
        return(
            <section>
                <StockMarketProvider value={ this.state }>
                    <InputStock
                        fetchStockMarketData={ this.fetchStockMarketData }
                    />
                    {/*
                    <StockSelector
                        setActiveIndex={ this.setActiveIndex }
                    />
                    */}
                </StockMarketProvider>
            </section>
        );
    }
}

export default Home;
