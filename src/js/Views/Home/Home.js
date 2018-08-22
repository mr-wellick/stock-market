import React, { Component } from "react";
import { Fragment }         from "react";
import PropTypes            from "prop-types";
import { Form  }            from "../../Components";
import { SideBar }          from "../SideBar";
import { Table }            from "../../Components";
import { LineChart }        from "../../Components";
//import { Histogram }        from "../../Components"; // Need to fix bar scaling.
import "./home.scss";

// Import redux stuff
import { fetchData } from "../../Redux";
import { connect }   from "react-redux";

class Home extends Component{
    componentDidMount(){
        this.props.getData("TSLA");
    }

    // Get user input
    onSubmit = (event) => {
        let userInput = document.getElementById("section__form-input").value.toUpperCase();

        // Get stock name and reset user form field
        if(userInput !== "")
        {
            this.props.getData(userInput);
            document.getElementById("section__form-input").value = "";
        }

        // Prevent refresh of the page when submitting stock to view.
        event.preventDefault();
    }

    render(){
        return(
            <Fragment>
                <section className="home-container">
                    <div className="home-container__input-selection">
                        <SideBar/>
                        <Form onSubmit={ this.onSubmit }/>
                    </div>
                </section>
                <section className="home-data-container">
                    <Table data={ this.props.stockData } name={ this.props.userInput }/>
                    <div className="charts">
                        <h2>Closing Price</h2>
                        <LineChart
                            errorMessage={ this.props.stockData.error }
                            xValues={ this.props.stockData.dates }
                            yValues={ this.props.stockData.close }
                            width={ 600 }
                            height={ 400 }
                            color={ "orange" }
                            padding={ 55 }
                            percent={ false }
                        />
                        <h2>Percent Change</h2>
                        <LineChart
                            errorMessage={ this.props.stockData.error }
                            xValues={ this.props.stockData.dates }
                            yValues={ this.props.stockData.percentChange }
                            width={ 600 }
                            height={ 400 }
                            color={ "crimson" }
                            padding={ 55 }
                            percent={ true }
                        />
                    </div>
                </section>
                {/*
                <Histogram
                    data={ this.props.stockData }
                    width={ 600 }
                    height={ 400 }
                    padding={ 1 }
                    scalar={ 15 }
                    color="crimson"
                />
                */}
            </Fragment>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        userInput:     state.stockName,
        stockData:     state.stockData,
        dates:         state.dates,
        open:          state.open,
        high:          state.high,
        low:           state.low,
        close:         state.close,
        adjustedClose: state.adjustedClose,
        percentChange: state.percentChange,
        error:         state.error,
        errorMessage:  state.errorMessage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getData: (name) => {
            dispatch(fetchData(name));
        }
    };
};

Home.propTypes = {
    getData: PropTypes.func,
    stockData: PropTypes.object,
    userInput: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
