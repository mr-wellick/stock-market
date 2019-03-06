import React            from "react";
import { useState }     from "react";
import PropTypes        from "prop-types";
import { connect }      from "react-redux";
import { fetchIEXData } from "../../Redux/";
import "./style.scss";


function InputStock(props){
    const [input, setInput] = useState("");

    function onSubmit(event){
        event.preventDefault();
        event.target.children[0].value = "";

        const validInput = input.match(/\w+/) ? input.match(/\w+/)[0].toUpperCase() : null;

        // won't fetch duplicate entries
        const duplicateEntry = props.data.filter(
            item => item.company.symbol === validInput
        );

        if(duplicateEntry.length > 0)
            alert(`${validInput} is already in your list.`);
        else
        {
            // fetch stock market data from iex api
            if(validInput)
                props.fetchIEXData(input);
            else
                alert("Invalid input.");
        }

    }

    return(
        <form
            className={ "input-form " + props.className }
            onSubmit={ onSubmit }
        >
            <input
                className="input is-small"
                type="search"
                onChange={ (event) => setInput(event.target.value) }
                required
            />
        </form>
    );
}

InputStock.propTypes = {
    className: PropTypes.string,
    fetchIEXData: PropTypes.func,
    data: PropTypes.array
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, { fetchIEXData })(InputStock);
