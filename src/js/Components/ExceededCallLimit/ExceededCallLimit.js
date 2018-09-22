import React         from "react";
import { Component } from "react";
import "./exceededCallLimit.scss";

class ExceededCallLimit extends Component{

    onClick = () => {
        let node = document.querySelector(".too-many-calls");
        console.log(node);
    }

    render(){
        return(
            <div className="too-many-calls">
                <div className={ true ? "too-many-calls__message--hide" : "" }>
                    <strong>Warning!</strong> Exceeded call Limit. Please wait a few seconds and try again.
            </div>
            <a className="too-many-calls__message--toggler" onClick={ this.onClick }>X</a>
        </div>
        );
    }
}

export default ExceededCallLimit;
