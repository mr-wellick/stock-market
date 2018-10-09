import React         from "react";
import { Component } from "react";
import "./duplicateEntries.scss";

class DuplicateEntries extends Component{
    render(){
        return(
            <div className="dialog-duplicate">
                <p>
                    <strong>Sorry! </strong>
                    Entered duplicate stock(s) and will not retrieve the following:
                </p>
                <ul>
                    <li>TSLA</li>
                </ul>
            </div>
        );
    }
}

export default DuplicateEntries;