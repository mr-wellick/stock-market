import React from "react";
import "./loading.scss";

let Loading = () => {
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
};

export default Loading;
