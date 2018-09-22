import React     from "react";
import PropTypes from "prop-types";
import "./droppedStock.scss";

let DroppedStock = (props) => {
    // Data is store in array. Take first entry to access error message
    let { errorMessage } = props.errorData[0];
    let { toggle }       = props;

    return(
        <div className="dropped-stock">
            <div className={ toggle ? "dropped-stock__message--hide" : "" }>
                <strong>Error! </strong>
                { errorMessage }
            </div>
            <div className="dropped-stock__message--toggler" onClick={ props.onClick }>x</div>
        </div>
    );
};

DroppedStock.propTypes = {
    errorData: PropTypes.array,
    onClick: PropTypes.func,
    toggle: PropTypes.bool
};

export default DroppedStock;
