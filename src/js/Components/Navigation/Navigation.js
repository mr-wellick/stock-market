import React         from "react";
import { Component } from "react";
import "./navigation.scss";

class Navigation extends Component{
    render(){
        return(
            <header className="main-header">
                <nav className="main-nav">
                    <h1 className="main-title">Stocks</h1>
                    { this.props.children }
                </nav>
            </header>
        );
    }
}

export default Navigation;
