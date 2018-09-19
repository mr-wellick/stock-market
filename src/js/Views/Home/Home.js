import React, { Component } from "react";
import PropTypes            from "prop-types";
import { Fragment }         from "react";
import { connect }          from "react-redux";
import { userInput }        from "../../Redux";
import { fetchData }        from "../../Redux";
import { Form }             from "../../Components";
import { Select }           from "../../Components";
import { Loading }          from "../../Components";
import {  Table }           from "../../Components";
//import { LineChart }        from "../../Components";
//import { Error }            from "../../Components";
import "./home.scss";

class Home extends Component{
    onSubmit = (event) => {
        // Get assetNames and turn into array
        let assetNames = document.querySelector("#user-input").value.toUpperCase().trim();
        let singleWord = /([A-Z]+)/;

        if(assetNames !== "")
        {
            assetNames = assetNames.split(",");
            assetNames = assetNames.map(item => item.match(singleWord)[0]); // match() returns an array.

            this.props.userInput(assetNames);
            this.props.fetchData(assetNames);
            document.querySelector("#user-input").value = "";
        }

        // If user only enters spaces, clear form only
        document.querySelector("#user-input").value = "";
        event.preventDefault();
    }

    render(){
        let { isFetching } = this.props.networkRequest;
        //let { assetsData } = this.props.fetchedData;
        console.log(this.props);

        return(
            <Fragment>
                <section className="section-forms">
                    <Select/>
                    <Form onSubmit={ this.onSubmit } placeholder="Enter ticker"/>
                </section>
                <section className="section-data">
                    {
                        (() => {
                            if(isFetching)
                                return <Loading/>;
                            else if(false)
                                return <Table assetsData={ assetsData }/>;
                        })()
                    }
                    <svg width="300" height="250"></svg>
                </section>
            </Fragment>
        );
    }

    //componentDidMount(){
    //    let { assetsName } = this.props.userInteraction;
    //    this.props.fetchData(assetsName);
    //}

}

// Map state to props
let mapState = (state) => {
    return {
        ...state
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
    userInteraction: PropTypes.object,
    networkRequest: PropTypes.object,
    fetchedData: PropTypes.object
};

export default connect(mapState, mapDispatch)(Home);
