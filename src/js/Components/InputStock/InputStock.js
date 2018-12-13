import React                   from "react";
import { Component }           from "react";
import PropTypes               from "prop-types";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import includes                from "lodash.includes";
import "./inputStock.scss";

class InputStock extends Component{
    static contextType = StockMarketConsumer;

    getStocksInState(){
        let { stockMarketData } = this.context;
        let stocksInState       = stockMarketData.map(stock => stock["company"]["symbol"]);

        return stocksInState;
    }

    filterInput(newStockEntry){
        let filteredInput = newStockEntry.match(/([A-Za-z]+)/);
        let isValidInput  = filteredInput ? filteredInput[0].toUpperCase() : null;

        return isValidInput;
    }

    getNewStockEntry(newStockEntry){
        let stocksInState   = this.getStocksInState();
        let isNewStockEntry = includes(stocksInState, newStockEntry); // returns false if stock is not in state

        if(!isNewStockEntry)
            this.props.fetchStockMarketData(newStockEntry); // fetch new entry
        else
            alert(`${newStockEntry} already in list.`);
    }

    onSubmit = (event) => {
        // get user input
        let userInput          = document.querySelector("#user-input").value;
        let filteredStockInput = this.filterInput(userInput);

        // check user input
        if(filteredStockInput !== null)
            this.getNewStockEntry(filteredStockInput);

        // clear form
        event.preventDefault();
        document.querySelector("#user-input").value = "";
    }

    render(){
        return(
            <form onSubmit={ this.onSubmit } className="stocks-form">
                <input
                    type="text"
                    placeholder="Enter Stock"
                    id="user-input"
                    required
                    pattern="([A-Za-z]+)"
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
}

export default InputStock;
