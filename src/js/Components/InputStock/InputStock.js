import React     from "react";
import PropTypes from "prop-types";
import "./style.scss";

function InputStock(props){
    return(
        <form className={ "input-form " + props.className }>
            <input className="input is-small" type="search" />
        </form>
    );
}

InputStock.propTypes = {
    className: PropTypes.string
};

export default InputStock;
