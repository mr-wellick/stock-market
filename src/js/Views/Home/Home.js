import React                from "react";
import { Component }        from "react";
import { Loader }           from "../../Components/";
//import { StockInfo }        from "../../Components/";
//import { Toggler }          from "../../Components/";
//import { StockSelector }    from "../../Components/";
//import { StockDescription } from "../../Components/";
//import { Chart }            from "../../Components/";
//import { StockNews }        from "../../Components/";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <>
                <Loader/>
                {/*
                <Toggler>
                    {({successData, robinhoodData, stockNews, onChange, activeIndex}) => (
                        <>
                            <StockInfo
                                successData={ successData[activeIndex] }
                                robinhoodData={ robinhoodData[activeIndex] }
                            />
                            <div className="chart-data-container">
                                <Chart successData={ successData[activeIndex] }/>
                                <StockSelector successData={ successData } onChange={ onChange }/>
                            </div>
                            <StockDescription
                                successData={ successData[activeIndex] }
                                robinhoodData={ robinhoodData[activeIndex] }
                            />
                            <StockNews
                                stockNews={ stockNews[activeIndex] }
                            />
                        </>
                    )}
                </Toggler>
                */}
            </>
        );
    }
}

export default Home;
