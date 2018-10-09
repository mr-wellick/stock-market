import React                from "react";
import { Component }        from "react";
import PropTypes            from "prop-types";
import { connect }          from "react-redux";
import { Errors }           from "../Errors/";
import { Warnings }         from "../Warnings/";
import { DuplicateEntries } from "../DuplicateEntries/";
import "./dialog.scss";

class Dialog extends Component{
    static propTypes = {
        children: PropTypes.array,
        errorData: PropTypes.array,
        manyCallsData: PropTypes.array,
        duplicateEntries: PropTypes.array
    }

    // Main application errors
    static Errors    = (props) => props.errors ? <Errors/> : null;
    static Warnings  = (props) => props.warnings ? <Warnings/> : null;
    static Duplicate = (props) => props.duplicate ? <DuplicateEntries/> : null;

    render(){
        let { children }         = this.props;
        let { errorData }        = this.props;
        let { manyCallsData }    = this.props;
        let { duplicateEntries } = this.props;

        return React.Children.map(children, childElemnt => {
            return React.cloneElement(childElemnt, {
                errors: errorData.length > 0 ? true : false,
                warnings: manyCallsData.length > 0 ? true : false,
                duplicate: duplicateEntries.length > 0 ? true : false
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
