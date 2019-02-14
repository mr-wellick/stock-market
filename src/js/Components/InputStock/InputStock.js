import React                   from "react";
import { Component }           from "react";
import TextField               from "@material-ui/core/TextField";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import includes                from "lodash.includes";
import "./style.scss";

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
            this.context.fetchStockMarketData(newStockEntry); // fetch new entry
        else
            this.context.setDuplicateEntry(newStockEntry);
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
            <form onSubmit={ this.onSubmit } className="main-form">
                <TextField
                    type="text"
                    placeholder="Search Stock"
                    id="user-input"
                    className="main-form__input"
                    fullWidth={ true }
                    variant="outlined"
                    inputProps={{style: { padding: "10px", textAlign: "center" }, pattern: "([A-Za-z]+)"}}
                    required={ true }
                />
            </form>
        );
    }

    componentDidMount(){
        //this.context.fetchStockMarketData("TSLA");
        //this.context.fetchStockMarketData("AAPL");
    }
}

export default InputStock;