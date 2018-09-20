import React         from "react";
import { Component } from "react";
import { Fragment }  from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import { userInput } from "../../Redux";
import { fetchData } from "../../Redux";
import { Input }     from "../../Components";
import { Select }    from "../../Components";
import { Loading }   from "../../Components";
import { Table }     from "../../Components";
import { LineChart } from "../../Components";
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
        let { requestingData } = this.props.isFetchingData;
        let { successData }    = this.props.receivedData;

        return(
            <Fragment>
                <section className="section-forms">
                    <Select/>
                    <Input onSubmit={ this.onSubmit } placeholder="Enter ticker(s)"/>
                </section>
                <section className="section-data">
                {
                    (() => {
                        if(requestingData)
                            return <Loading/>;
                        else if(successData.length > 0)
                            return(
                                <Fragment>
                                    <Table successData={ successData }/>
                                    <LineChart successData={ successData }/>
                                </Fragment>
                            );
                        else
                        {
                            return <div> Please enter a stock(s) seperated by a comma.</div>;
                        }
                    })()
                }
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
    isFetchingData: PropTypes.object,
    receivedData: PropTypes.object,
    userInteraction: PropTypes.object
};

export default connect(mapState, mapDispatch)(Home);
