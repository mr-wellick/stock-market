import React from "react";
import "./logo.scss";

const Logo = () => {
    return(
        <div className="app-logo__positioning">
            <a className="app-logo__container" href="/">
                <div className="app-logo__block1"></div>
                <div className="app-logo__block2"></div>
                <div className="app-logo__block3"></div>
                <div className="app-logo__block4"></div>
            </a>
        </div>
    );
};

export default Logo;
