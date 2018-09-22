import React         from "react";
import { Component } from "react";
import "./droppedStock.scss";

class DroppedStock extends Component{
    render(){
        return(
            <div className="dropped-stock">
                <div>
                    <strong>Error!</strong> Entered incorrect stock.
                </div>
                <a className="dropped-stock__message--toggler">X</a>
            </div>
        );
    }
}


export default DroppedStock;
