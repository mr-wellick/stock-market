import React                from "react";
import { Component }        from "react";
import { Loader }           from "../../Components/";
import { StockMetrics }     from "../../Components/";
import { Toggler }          from "../../Components/";
import { StockSelector }    from "../../Components/";
import { StockDescription } from "../../Components/";
import { HistoricalChart }  from "../../Components/";
import { Histogram }        from "../../Components/";
import { FinancialsChart }  from "../../Components/";
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
                    {({stockData, onChange, activeIndex, width, height, padding}) => (
                        <>
                            <StockMetrics
                                stockData={ stockData[activeIndex] }
                            />
                            <HistoricalChart
                                width={ width }
                                height={ height }
                                padding={ padding }
                                stockData={ stockData[activeIndex] }
                            />
                            <Histogram
                                width={ width }
                                height={ height }
                                padding={ padding }
                                stockData={ stockData }
                            />
                            <FinancialsChart
                                width={ width }
                                height={ height }
                                padding={ padding }
                                stockData={ stockData[activeIndex] }
                            />
                            <StockSelector
                                stockData={ stockData }
                                onChange={ onChange }
                            />
                            <StockDescription
                                stockData={ stockData[activeIndex] }
                            />
                            <StockNews
                                stockData={ stockData[activeIndex] }
                            />
                        </>
                    )}
                </Toggler>
            </>
        );
    }
}

export default Home;