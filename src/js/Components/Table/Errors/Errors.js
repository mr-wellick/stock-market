import React     from "react";
import PropTypes from "prop-types";
import "./errors.scss";

// If error in api call
const Errors = (props) => {
    return(
        <h1>{ props.error[0][1] }</h1>
    );
};

Errors.propTypes = {
    error: PropTypes.array
};

export default Errors;
