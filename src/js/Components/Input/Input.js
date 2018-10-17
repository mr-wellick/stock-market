import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import { fetchData } from "../../Redux/";
import { userInput } from "../../Redux/";
import uniq          from "lodash.uniq";
import includes      from "lodash.includes";
import "./input.scss";

class Input extends Component{
    static propTypes = {
        fetchData: PropTypes.func,
        userInput: PropTypes.func,
        successData: PropTypes.array
    }

    extractStockNames(stockNames){
        let singleWord          = /([A-Z]+)/;
        let extractedStockNames = stockNames.map(stock => stock.match(singleWord)[0]);
        return extractedStockNames;
    }

    getCurrentStockNamesInState(){
        let { successData } = this.props;
        let currentStocks   = successData.map( dataset => dataset["data"]["stockName"] );
        return currentStocks;
    }

    getNewStockEntries(userStockEntries){
        let stocksInState   = this.getCurrentStockNamesInState();
        let newStockEntries = [];

        userStockEntries.forEach(userEntry => {
            let stockIsIncluded = includes(stocksInState, userEntry);
            if(stockIsIncluded === false)
                newStockEntries.push(userEntry);
        });

        if(newStockEntries.length > 0)
            this.props.fetchData(newStockEntries);
    }

    getDuplicateStockEntries(userStockEntries){
        let stocksInState         = this.getCurrentStockNamesInState();
        let duplicateStockEntries = [];

        userStockEntries.forEach(userEntry => {
            let stockIsIncluded = includes(stocksInState, userEntry);
            if(stockIsIncluded === true)
                duplicateStockEntries.push(userEntry);
        });

        if(duplicateStockEntries.length > 0)
            this.props.userInput(duplicateStockEntries);
    }

    onSubmit = (event) => {
        // get user input
        let userInput = document.querySelector("#user-input").value.toUpperCase().trim();

        // check user input
        if(userInput !== "")
        {
            let arrayOfInputs       = userInput.split(",");
            let extractedStockNames = this.extractStockNames(arrayOfInputs);
            let uniqueEntries       = uniq(extractedStockNames);

            this.getNewStockEntries(uniqueEntries);
            this.getDuplicateStockEntries(uniqueEntries);
        }

        // clear form
        event.preventDefault();
        document.querySelector("#user-input").value = "";
    }

    render(){
        return(
            <form onSubmit={ this.onSubmit } className="main-form">
                <input
                    type="text"
                    placeholder="Enter Stock(s)"
                    id="user-input"
                    className="main-form__input"
                />
                <button
                    type="submit"
                    className="main-form__btn"
                >
                ADD
                </button>
            </form>
        );
    }

    componentDidMount(){
        if(this.props.successData.length === 0)
            this.props.fetchData(["TSLA", "KO", "AAPL"]);
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, { fetchData, userInput })(Input);
