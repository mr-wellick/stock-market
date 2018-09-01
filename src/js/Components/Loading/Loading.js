import React from "react";
import "./loading.scss";

let Loading = (props) => {
    return(
        <div className="loading">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
        </div>
    );
};

export default Loading;