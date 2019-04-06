import React                from "react";
import PropTypes            from "prop-types";
import { StockSelector }    from "../../Components/";
import { connect }          from "react-redux";
import { InputStock }       from "../../Components/";
//import { FinancialsTable }  from "../../Components/";
import { ChartSelector }    from "../../Components/";
//import { StockDescription } from "../../Components/";
import "./style.scss";


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
            <div className="sidebar-content">
                <ChartSelector/>
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
