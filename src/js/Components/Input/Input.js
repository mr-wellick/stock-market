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

    onSubmit = (event) => {
        // get user input
        let userInput = document.querySelector("#user-input").value.toUpperCase().trim();

        // check user input
        if(userInput !== "")
        {
            // turn user input into array
            let arrayOfInputs = userInput.split(",");

            // filter user input
            let singleWord    = /([A-Z]+)/;
            let filterInputs  = arrayOfInputs.map(stock => stock.match(singleWord)[0]);
            let uniqueEntries = uniq(filterInputs);

            // Get current stock names in Redux state
            let currentStocks       = this.props.successData.map( item => item["data"]["symbol"] );
            let filteredStockNames  = [];
            let duplicateStockNames = [];

            // Retrieve stock names that are not included in Redux state
            uniqueEntries.forEach( stock => {
                let includedStock = includes(currentStocks, stock);
                 if(includedStock === false)
                {
                    filteredStockNames.push(stock);
                }
                else if(includedStock === true)
                {
                    duplicateStockNames.push(stock);
                }
            });

            // Only fetch new entries
            if(filteredStockNames.length > 0)
            {
                this.props.fetchData(filteredStockNames);
            }
             // Let the user know duplicate entries will not be fetched
            if(duplicateStockNames.length > 0)
            {
                this.props.userInput(duplicateStockNames);
            }
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
        //this.props.fetchData(["TSLA"]);
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, { fetchData, userInput })(Input);
