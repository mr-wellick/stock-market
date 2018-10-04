import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import { fetchData } from "../../Redux/";
import uniq          from "lodash.uniq";
import "./input.scss";

class Input extends Component{
    onSubmit = (event) => {
        // get user input
        let userInput = document.querySelector("#user-input").value.toUpperCase().trim();

        // check user input
        if(userInput !== "")
        {
            // turn user input into array
            let arrayOfInputs = userInput.split(",");

            // filter user input
            let singleWord   = /([A-Z]+)/;
            let filterInputs = arrayOfInputs.map(stock => stock.match(singleWord)[0]);

            // get unique entries only
            let uniqueEntries = uniq(filterInputs);
            this.props.fetchData(uniqueEntries);
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
}

Input.propTypes = {
    fetchData: PropTypes.func
};

export default connect(null, { fetchData })(Input);
