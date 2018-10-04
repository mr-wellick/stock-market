import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./dialog.scss";

class Dialog extends Component{
    static propTypes = {
        children: PropTypes.array,
        errorData: PropTypes.array,
        manyCallsData: PropTypes.array
    }

    // handle error messages
    static Error = (props) => props.error ?
        <div className="dialog-error">
            <p>
                <strong>Error! </strong>
                Entered incorrect stock(s).
            </p>
        </div> : null;

    // handle warnings
    static Warning = (props) => props.warning ?
        <div className="dialog-warning">
            <p>
                <strong>Warning! </strong>
                Can only retrieve a maximum of 4 stocks per minute.
                Please wait.
            </p>
        </div> : null;

    // handle duplicate stock entries
    static Duplicate = (props) => props.duplicate ?
        <div className="dialog-duplicate">
            <p>
                <strong>Sorry! </strong>
                Entered duplicate stock(s) and will not retrieve the following:
            </p>
            <ul>
                <li>TSLA</li>
            </ul>
        </div> : null;

    // handle success retrievals
    static Success = (props) => props.success ?
        <div className="dialog-success">
            <p>
                <strong>Success! </strong>
                The following stocks were retrieved successfully:
            </p>
            <ul>
                <li>TSLA</li>
            </ul>
        </div> : null;

    render(){
        let { children }      = this.props;
        let { errorData }     = this.props;
        let { manyCallsData } = this.props;

        return React.Children.map(children, childElemnt => {
            return React.cloneElement(childElemnt, {
                error: errorData.length > 0 ? true : false,
                warning: manyCallsData.length > 0 ? true : false,
                duplicate: false,
                success: false
            });
        });
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(Dialog);
