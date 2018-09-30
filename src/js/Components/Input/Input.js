import React, { Component }       from "react";
import PropTypes                  from "prop-types";
import { connect }                from "react-redux";
import { userInput }              from "../../Redux";
import { fetchData }              from "../../Redux";
import { enteredDuplicateStocks } from "../../Redux";
import uniq                       from "lodash.uniq";
import includes                   from "lodash.includes";
import "./input.scss";

class Input extends Component{
    onSubmit = (event) => {
        let assetNames = document.querySelector("#user-input").value.toUpperCase().trim();
        let singleStock = /([A-Z]+)/;

        if(assetNames !== "")
        {
            // Turn user input into array
            assetNames = assetNames.split(",");
            assetNames = assetNames.map(item => item.match(singleStock)[0]); // match() returns an array
            assetNames = uniq(assetNames);

            // Get current stock names in Redux state
            let currentStocks       = this.props.successData.map( item => item["processedData"]["symbol"] );
            let filteredStockNames  = [];
            let duplicateStockNames = [];

            // Retrieve stock names that are not included in Redux state
            assetNames.forEach( stock => {
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
                this.props.userInput(filteredStockNames);
                this.props.fetchData(filteredStockNames);
            }

            // Let the user know duplicate entries will not be fetched
            if(duplicateStockNames.length > 0)
            {
                this.props.enteredDuplicateStocks(duplicateStockNames);
            }

        }

        // Clear form
        document.querySelector("#user-input").value = "";
        event.preventDefault();
    }

    render(){
        return(
            <form  className="form-input" onSubmit={ this.onSubmit }>
                <input className="form-input__text" type="text" placeholder="Enter stock(s)" id="user-input"/>
                <button className="form-input__btn" type="submit">VIEW</button>
            </form>
        );
    }

    componentDidMount(){
        let { assetNames }  = this.props;
        let { successData } = this.props;

        // When component mounts, we have no data so fetch
        if(successData.length === 0)
        {
            //this.props.fetchData(assetNames);
        }

    }
}

Input.propTypes = {
    userInput: PropTypes.func,
    fetchData: PropTypes.func,
    enteredDuplicateStocks: PropTypes.func,
    assetNames: PropTypes.array,
    successData: PropTypes.array,
};

let mapState = (state) => {
    return {
        ...state.receivedData,
        ...state.userInteraction
    };
};

export default connect(mapState, { userInput, fetchData, enteredDuplicateStocks })(Input);
