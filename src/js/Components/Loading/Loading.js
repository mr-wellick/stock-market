import React from "react";
import "./loading.scss";

let Loading = () => {
    return(
        <div className="loading-icon">
                <div className="loading-icon__box"></div>
                <div className="loading-icon__box"></div>
                <div className="loading-icon__box"></div>
                <div className="loading-icon__box"></div>
        </div>
    );
};

export default Loading;
