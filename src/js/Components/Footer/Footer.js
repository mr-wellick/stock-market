import React         from "react";
import { Component } from "react";
import "./footer.scss";

class Footer extends Component{
    render(){
        return(
            <footer className="main-footer">
                <h2 className="main-footer__cta">Developed &amp; Designed by LRNZ</h2>
                <p className="main-footer__disclaimer">Disclaimer: Not intended to replace a financial advisor.</p>
            </footer>
        );
    }
}

export default Footer;
