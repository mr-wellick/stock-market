import React         from "react";
import { Component } from "react";
import "./footer.scss";

class Footer extends Component{
    render(){
        return(
            <footer className="main-footer">
                <div>
                    <p>
                        Developed &amp; Designed by LRNZ | Data provided for free by &nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://iextrading.com/developer/"
                        >IEX</a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
