import React     from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Logo = (props) => {
    return(
        <div className={ "logo " + props.className }>
            <div className="logo-block-1"></div>
            <div className="logo-block-2"></div>
            <div className="logo-block-3"></div>
            <div className="logo-block-4"></div>
        </div>
    );
};

Logo.propTypes = {
    className: PropTypes.string
};

export default Logo;
