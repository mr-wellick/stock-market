import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./dialog.scss";

class Dialog extends Component{

    static Error   = (props) => props.error ? <div>{ props.children }</div> : null;
    static Warning = (props) => props.warning ? <div>{ props.children }</div> : null;

    render(){
        let { children } = this.props;
        let { errorData } = this.props;
        let { tooManyCallsData } = this.props;
    
        return React.Children.map(children, childElement => {
            return React.cloneElement(childElement,{
                error: errorData.length > 0 ? true : false,
                warning: tooManyCallsData.length > 0 ? true : false
            });
        });
    }
}

Dialog.propTypes = {
    children: PropTypes.array,
    errorData: PropTypes.array,
    tooManyCallsData: PropTypes.array
};

let mapState = (state) => {
    return {
        ...state.receivedData
    };
};

export default connect(mapState, null)(Dialog);