import React from "react";
import PropTypes from "prop-types";
import "./exceededCallLimit.scss";

let ExceededCallLimit = (props) => {
    return(
        <div className="too-many-calls">
            <div className={ true ? "too-many-calls__message--hide" : "" }>
                <strong>Warning!</strong> Exceeded call Limit. Please wait a few seconds and try again.
            </div>
            <a className="too-many-calls__message--toggler">X</a>
        </div>
    );
};

ExceededCallLimit.propTypes = {
};

export default ExceededCallLimit;
