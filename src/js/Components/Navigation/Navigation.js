import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import AppBar        from "@material-ui/core/AppBar";
import Toolbar       from "@material-ui/core/Toolbar";
import IconButton    from "@material-ui/core/IconButton";
import { Logo }      from "../Logo/";
import "./style.scss";

class Navigation extends Component{
    static propTypes = {
        children: PropTypes.any
    }

    render(){
        return(
            <section className="search-section">
                <AppBar position="fixed" color="default" style={{ backgroundColor: "#fff" }}>

                    <Toolbar className="search-container">
                        <div className="search-brand">
                            <IconButton style={{ paddingLeft: "0"}}>
                                <Logo/>
                            </IconButton>
                        </div>

                        { this.props.children }
                    </Toolbar>

                </AppBar>
            </section>
        );
    }
}

export default Navigation;
