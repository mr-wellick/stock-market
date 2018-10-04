import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import "./dialog.scss";

class Dialog extends Component{

    // handle error messages
    static Error = (props) => props.error ?
        <div className="dialog-error">
            <div className="dialog-error__keyword">Error!</div>
            Entered incorrect stock.
        </div> : null;
    
    // handle warnings
    static Warning = (props) => props.warning ? props.children : null;

    // handle duplicate stock entries 
    static Duplicate = (props) => props.duplicate ? props.children : null;

    // handle success retrievals
    static Success = (props) => props.success ? props.children : null;

    render(){
        let { children } = this.props;
        return React.Children.map(children, childElemnt => {
            return React.cloneElement(childElemnt, {
                error: true,
                warning: false,
                duplicate: false,
                success: false
            });
        });
    }
}

Dialog.propTypes = {
    children: PropTypes.array
};

export default Dialog;