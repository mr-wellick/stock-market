import React               from "react";
import PropTypes           from "prop-types";
//import { lazy }            from "react";
//import { Suspense }        from "react";
import { StockSelector }   from "../../Components/";
//import { FinancialsTable } from "../../Components/";
import { connect }         from "react-redux";
import "./style.scss";

//const ChartSelector    = lazy(() => import("../../Components/ChartSelector/ChartSelector.js"));
//const StockDescription = lazy(() => import("../../Components/StockDescription/StockDescription.js"));
//const StockNews        = lazy(() => import("../../Components/StockNews/StockNews.js"));

function Home(props){
    return(
        <section className="home-container">
            <div className="home-sidebar">
                <StockSelector/>
            </div>
            {/*
            <div className="home-content">
                props.data.length === 0 && props.isFetching
                    ?
                        <h1>Loading data...</h1>
                    :
                        <Suspense fallback={ <h1>Loading...</h1> }>
                            <FinancialsTable/>
                            <ChartSelector/>
                            <StockDescription/>
                            <StockNews/>
                        </Suspense>
            </div>
            */}
        </section>
    );
}

Home.propTypes = {
    data: PropTypes.array,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state) => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(Home);
