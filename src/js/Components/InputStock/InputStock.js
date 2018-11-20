import React                   from "react";
import { Component }           from "react";
import PropTypes               from "prop-types";
import { connect }             from "react-redux";
import { fetchStockData }      from "../../Redux/";
import { duplicateStockEntry } from "../../Redux/";
import includes                from "lodash.includes";
import "./inputStock.scss";

class InputStock extends Component{
    static propTypes = {
        fetchStockData: PropTypes.func,
        duplicateStockEntry: PropTypes.func,
        stockData: PropTypes.array
    }

    getStocksInState(){
        let { stockData } = this.props;
        let stocksInState = stockData.map(stock => stock["company"]["symbol"]);

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
            this.props.fetchStockData(newStockEntry); // fetch new entry
        else
            this.props.duplicateStockEntry(newStockEntry); // tell user we cant fetch stocks already in state
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
                <input
                    type="text"
                    placeholder="Enter Stock"
                    id="user-input"
                    className="main-form__input"
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

    componentDidMount(){
        //if(this.props.stockData.length === 0)
        //    this.props.fetchStockData("TSLA");
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, { fetchStockData, duplicateStockEntry })(InputStock);
