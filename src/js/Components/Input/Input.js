import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import { fetchData } from "../../Redux/";
import { userInput } from "../../Redux/";
import includes      from "lodash.includes";
import "./input.scss";

class Input extends Component{
    static propTypes = {
        fetchData: PropTypes.func,
        userInput: PropTypes.func,
        successData: PropTypes.array
    }

    getCurrentStockNamesInState(){
        let { successData } = this.props;
        let currentStocks   = successData.map( dataset => dataset["data"]["stockName"] );

        return currentStocks;
    }

    getNewStockEntry(stock){
        let stocksInState = this.getCurrentStockNamesInState();
        let isNewEntry    = includes(stocksInState, stock); // returns false if stock is not in array

        if(!isNewEntry)
            this.props.fetchData([stock]); // fetch all new entries
        else
            this.props.userInput([stock]); // tell user we can't fetch entries already in state
    }

    onSubmit = (event) => {
        // get user input
        let userInput     = document.querySelector("#user-input").value;
        let filteredInput = userInput.match(/([A-Za-z]+)/)[0].trim().toUpperCase();

        // check user input
        if(userInput !== "")
            this.getNewStockEntry(filteredInput);

        // clear form
        event.preventDefault();
        document.querySelector("#user-input").value = "";
    }

    render(){
        return(
            <form onSubmit={ this.onSubmit } className="main-form">
                <input
                    type="text"
                    placeholder="Enter Stock"
                    id="user-input"
                    className="main-form__input"
                />
                <button
                    type="submit"
                    className="main-form__btn"
                >
                Add Stock
                </button>
            </form>
        );
    }

    componentDidMount(){
        if(this.props.successData.length === 0)
            this.props.fetchData(["TSLA"]);
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, { fetchData, userInput })(Input);
