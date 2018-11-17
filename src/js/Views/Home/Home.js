import React                from "react";
import { Component }        from "react";
import { Loader }           from "../../Components/";
import { StockMetrics }     from "../../Components/";
import { Toggler }          from "../../Components/";
import { StockSelector }    from "../../Components/";
import { StockDescription } from "../../Components/";
import { Chart }            from "../../Components/";
import { StockNews }        from "../../Components/";
import { DuplicateEntry }   from "../../Components/";
import { Errors }           from "../../Components/";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <>
                <Errors/>
                <DuplicateEntry/>
                <Loader/>
                <Toggler>
                    {({stockData, onChange, activeIndex}) => (
                        <>
                            <StockMetrics stockData={ stockData[activeIndex] }/>
                            <div className="chart-data-container">
                                <Chart stockData={ stockData[activeIndex] }/>
                                <StockSelector stockData={ stockData } onChange={ onChange }/>
                            </div>
                            <StockDescription stockData={ stockData[activeIndex] }/>
                            <StockNews stockData={ stockData[activeIndex] }/>
                        </>
                    )}
                </Toggler>
            </>
        );
    }
}

export default Home;
