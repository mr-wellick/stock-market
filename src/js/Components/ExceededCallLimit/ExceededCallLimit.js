import React         from "react";
import { Component } from "react";
import "./exceededCallLimit.scss";

class ExceededCallLimit extends Component{
    render(){
        return(
            <div className="too-many-calls">
                <div>
                    <strong>Warning!</strong> Exceeded api call limit.
                </div>
                <a className="too-many-calls__message--toggler">X</a>
            </div>
        );
    }
}

export default ExceededCallLimit;
