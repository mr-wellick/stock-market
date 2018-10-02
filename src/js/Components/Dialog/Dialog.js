import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./dialog.scss";

class Dialog extends Component{
    static Error     = (props) => props.error ? props.children : null;
    static Warning   = (props) => props.warning ? props.children : null;
    static Duplicate = (props) => props.duplicate ? props.children : null;

    render(){
        let { children }         = this.props;
        let { errorData }        = this.props;
        let { tooManyCallsData } = this.props;
        let { duplicateStocks }  = this.props;
    
        return React.Children.map(children, childElement => {
            return React.cloneElement(childElement,{
                error: errorData.length > 0 ? true : false,
                warning: tooManyCallsData.length > 0 ? true : false,
                duplicate: duplicateStocks.length > 0 ? true : false
            });
        });
    }
}

Dialog.propTypes = {
    children: PropTypes.array,
    errorData: PropTypes.array,
    tooManyCallsData: PropTypes.array,
    duplicateStocks: PropTypes.array
};

let mapState = (state) => {
    return {
        ...state.receivedData,
        ...state.userInteraction
    };
};

export default connect(mapState, null)(Dialog);