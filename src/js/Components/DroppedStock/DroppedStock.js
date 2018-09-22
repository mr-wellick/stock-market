import React     from "react";
import PropTypes from "prop-types";
import "./droppedStock.scss";

let DroppedStock = (props) => {
    let { toggle } = props;

    return(
        <div className="dropped-stock">
            <div className={ toggle ? "dropped-stock__message--hide" : "" }>
                <strong>Error!</strong> Entered incorrect stock.
            </div>
            <a className="dropped-stock__message--toggler" onClick={ props.onClick }>x</a>
        </div>
    );
};

DroppedStock.propTypes = {
    // errorData: PropTypes.array,
    onClick: PropTypes.func,
    toggle: PropTypes.bool
};

export default DroppedStock;
