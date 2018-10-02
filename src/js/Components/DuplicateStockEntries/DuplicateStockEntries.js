import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./duplicateStockEntries.scss";

class DuplicateStockEntries extends Component{
    render(){
        let { duplicateStocks } = this.props;

        return(
            <div className="duplicate-stock">
                <div className="duplicate-stock__message">
                    <strong>Sorry!</strong> Entered duplicate stock(s) and will not retrieve the following:
                    {
                        duplicateStocks.map( (item, index) =>
                            <p key={ index }>
                                { item }
                            </p>
                        )
                    }
                </div>
                <a className="duplicate-stock__message--toggler">X</a>
            </div>
        );
    }
}

DuplicateStockEntries.propTypes = {
    duplicateStocks: PropTypes.array
};

let mapState = (state) => {
    return {
        ...state.userInteraction
    };
};

export default connect(mapState, null)(DuplicateStockEntries);
