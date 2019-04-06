import React             from "react";
import PropTypes         from "prop-types";
import { StockSelector } from "../../Components/";
import { connect }       from "react-redux";
import { InputStock }    from "../../Components/";
import "./style.scss";

//const ChartSelector    = lazy(() => import("../../Components/ChartSelector/ChartSelector.js"));
//const StockDescription = lazy(() => import("../../Components/StockDescription/StockDescription.js"));
//const StockNews        = lazy(() => import("../../Components/StockNews/StockNews.js"));

function Home(props){

    function toggleSidebar() {
        const sidebar = document.querySelector(".sidebar");

        if(!sidebar.className.includes(" is-open"))
        {
            sidebar.className += " is-open";
        }
        else
        {
            sidebar.className = "sidebar";
        }
    }

    return(
        <section className="sidebar-container">
            <div className="sidebar">
                <div className="sidebar-toggler" onClick={ toggleSidebar }>&gt;&gt;</div>
                <InputStock/>
                <hr style={{ margin: "0" }}/>
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
