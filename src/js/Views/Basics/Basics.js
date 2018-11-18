import React         from "react";
import { Component } from "react";
import Intro         from "./Intro.js";
import Resources     from "./Resources.js";
import "./basics.scss";

class Basics extends Component{
    render(){
        return(
            <section>
                <Intro/>
                <Resources/>
            </section>
        );
    }
}

export default Basics;
