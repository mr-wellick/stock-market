import React                from "react";
import PropTypes            from "prop-types";
import { StockSelector }    from "../../Components/";
import { connect }          from "react-redux";
import { InputStock }       from "../../Components/";
//import { FinancialsTable }  from "../../Components/";
//import { StockDescription } from "../../Components/";
import { ChartSelector }    from "../../Components/";
import { ActiveChart }      from "../../Components/";
import { StockHeader }      from "../../Components/";
import "./style.scss";


function Home(props){

    function toggleSidebar() {
        const sidebar = document.querySelector(".sidebar");
        const content = document.querySelector(".sidebar-content");

        if(!sidebar.className.includes(" is-open"))
        {
            sidebar.className += " is-open";
            content.className += " is-full-width";
        }
        else
        {
            sidebar.className = "sidebar";
            content.className = "sidebar-content";
        }
    }

    return(
        <section className="sidebar-container">
            <div className="sidebar">
                <div className="sidebar-toggler" onClick={ toggleSidebar }>&gt;&gt;</div>
                <InputStock/>
                <hr style={{ margin: "0" }}/>
                <StockSelector/>
                <ChartSelector/>
            </div>
            <div className="sidebar-content">
                <StockHeader/>
                <ActiveChart/>
                {/*
                <FinancialsTable/>
                <StockDescription/>
                <StockNews/>
                */}
            </div>
        </section>
    );
}

Home.propTypes = {
    data: PropTypes.array,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state) => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(Home);
