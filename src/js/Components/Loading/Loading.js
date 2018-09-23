import React         from "react";
import { Component } from "react";
import "./loading.scss";

class Loading extends Component{
    render(){
        return(
            <section className="section-data__container">
                <div className="loading-icon">
                    <div className="loading-icon__box"></div>
                    <div className="loading-icon__box"></div>
                    <div className="loading-icon__box"></div>
                    <div className="loading-icon__box"></div>
                </div>
            </section>
        );
    }
}

export default Loading;
