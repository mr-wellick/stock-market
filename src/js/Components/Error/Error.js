import React     from "react";
import PropTypes from "prop-types";
import "./error.scss";

let Error = (props) => {

    return(
        <h2>{ props.errorMessage }</h2>
    );
};

Error.propTypes = {
    errorMessage: PropTypes.string
};

export default Error;