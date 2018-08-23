import React, { Component } from "react";
import "./Form.scss";

class Form extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Enter a valid asset ticker"/>
                <input type="submit" value="View"/>
            </form>
        );
    }
}

export default Form;
