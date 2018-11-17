import React                              from "react";
import PropTypes                          from "prop-types";
import { Component }                      from "react";
import { resetFailedFetchRequestMessage } from "../../Redux/";
import { connect }                        from "react-redux";
import "./errors.scss";

class Errors extends Component {
    static propTypes = {
        stockDataError: PropTypes.string,
        resetFailedFetchRequestMessage: PropTypes.func
    }

    onClick = () => {
        this.props.resetFailedFetchRequestMessage();
    }

    render(){
        if(!this.props.stockDataError)
            return null;

        let { stockDataError } = this.props;

        return(
            <div className="app-error">
                <p>{ stockDataError }</p>
                <a onClick={ this.onClick }>X</a>
            </div>
        );
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, { resetFailedFetchRequestMessage })(Errors);
