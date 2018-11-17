import React                        from "react";
import PropTypes                    from "prop-types";
import { Component }                from "react";
import { connect }                  from "react-redux";
import { resetDuplicateStockEntry } from "../../Redux/";
import "./duplicateEntry.scss";

class DuplicateEntry extends Component{
    static propTypes = {
        resetDuplicateStockEntry: PropTypes.func,
        stockName: PropTypes.string
    }

    onClick = () => {
        this.props.resetDuplicateStockEntry();
    }

    render(){
        if(!this.props.stockName)
            return null;

        let { stockName } = this.props;

        return(
            <div>
                <p>
                    {
                        `Sorry! you have entered ${stockName}, a stock already in your list. Will not retrieve.`
                    }
                </p>
                <a onClick={ this.onClick }>X</a>
            </div>
        );
    }
}

let mapState = (state) => {
    return {
        ...state.duplicateStockEntry
    };
};

export default connect(mapState, { resetDuplicateStockEntry })(DuplicateEntry);
