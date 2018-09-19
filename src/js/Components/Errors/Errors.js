import React     from "react";
import PropTypes from "prop-types";
import "./errors.scss";

let Errors = (props) => {
    return(
        <div>
            { props.errorMessage }
        </div>
    );
};

Errors.propTypes = {
    errorMessage: PropTypes.string
};

export default Errors;
