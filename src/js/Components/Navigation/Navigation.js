import React         from "react";
import { Component } from "react";
import { Logo }      from "../Logo/";
import "./navigation.scss";

class Navigation extends Component{
    render(){
        return(
            <header className="main-header">
                <nav className="main-nav">
                    <div className="main-nav__logo">
                        <Logo/>
                        <h1 className="main-title">Stocks</h1>
                    </div>
                    { this.props.children }
                </nav>
            </header>
        );
    }
}

export default Navigation;
