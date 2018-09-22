import React     from "react";
import PropTypes from "prop-types";
import "./droppedStock.scss";

let DroppedStock = (props) => {
    return(
        <div className="dropped-stock">
            <div className={ true ? "dropped-stock__message--hide" : "" }>
                <strong>Error!</strong> Entered incorrect stock.
            </div>
            <a className="dropped-stock__message--toggler">X</a>
        </div>
    );
};

DroppedStock.propTypes = {
};

export default DroppedStock;
