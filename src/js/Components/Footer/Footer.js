import React         from "react";
import { Component } from "react";
import "./footer.scss";

class Footer extends Component{
    render(){
        return(
            <footer className="main-footer">
                <h2 className="main-footer__cta"> <a>Developed &amp;</a> Designed by LRNZ</h2>
                <p className="main-footer__disclaimer">Disclaimer: use at your own peril.</p>
            </footer>
        );
    }
}

export default Footer;
