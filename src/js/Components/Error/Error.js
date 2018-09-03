import React     from "react";
import PropTypes from "prop-types";
import "./error.scss";

let Error = (props) => {
    return(
        <div>
            { props.errorMessage }
        </div>
    );
};

Error.propTypes = {
    errorMessage: PropTypes.string
};

export default Error;
