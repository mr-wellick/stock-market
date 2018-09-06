import React, { Component } from "react";
import PropTypes            from "prop-types";
import { Fragment }         from "react";
import { connect }          from "react-redux";
import { userInput }        from "../../Redux";
import { fetchData }        from "../../Redux";
import { Form, Table }      from "../../Components";
import { Select }           from "../../Components";
//import { LineChart }        from "../../Components";
import { Loading }          from "../../Components";
import { Error }            from "../../Components";
import "./home.scss";

// Data types for stocks
let stockDataTypes = [
    ["Monthly Adjusted", "function=TIME_SERIES_MONTHLY_ADJUSTED&"],
    ["Daily Adjusted", "function=TIME_SERIES_DAILY_ADJUSTED&"]
];

class Home extends Component{
    componentDidMount(){
        let { assetName } = this.props.userInteraction;
        this.props.fetchData(assetName);
    }

    onSubmit = (event) => {
        let assetName = document.querySelector("#user-input").value.toUpperCase();
        if(assetName !== "")
        {
            this.props.userInput(assetName);
            this.props.fetchData(assetName);
            document.querySelector("#user-input").value = "";
        }
        event.preventDefault();
    }

    render(){
        let { isFetching }          = this.props;
        let { processedData }       = this.props.fetchedData;
        let { error, errorMessage } = this.props.fetchedData;

        return(
            <Fragment>
                <section className="section-forms">
                    <Select label="Stocks" stockDataTypes={ stockDataTypes }/>
                    <Form onSubmit={ this.onSubmit } placeholder="Enter ticker"/>
                </section>
                <section className="section-data">
                    {
                        (() => {
                            if(error)
                                return <Error errorMessage={ errorMessage }/>;
                            else if(isFetching)
                                return <Loading/>;
                            else if(processedData["assetName"] !== undefined)
                                return <Table processedData={ processedData }/>;
                        })()
                    }
                    {/*<LineChart width={ 600 } height={ 400 } processedData={ processedData } color="crimson"/>*/}
                </section>
            </Fragment>
        );
    }
}

// Map state to props
let mapState = (state) => {
    return {
        ...state.networkRequest,
        ...state.userInteraction,
        ...state.fetchedData
    };
};

// Map dispatch to props
let mapDispatch = (dispatch) => {
    return {
        userInput: (assetName) => {
            dispatch(userInput(assetName));
        },
        fetchData: (assetName) => {
            dispatch(fetchData(assetName));
        }
    };
};

// PropType checking
Home.propTypes = {
    userInput: PropTypes.func,
    fetchData: PropTypes.func,
    fetchedData: PropTypes.object,
    isFetching: PropTypes.bool,
    userInteraction: PropTypes.object
};

export default connect(mapState, mapDispatch)(Home);
