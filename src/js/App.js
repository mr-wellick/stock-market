// React & React-Router
import React, { Component, Fragment }           from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import user defined components
import { Home } from "./Views/Home";

// for now use this css
const headerCSS = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    justifyItems: "center",
    margin: "10px"
};

// Application
class App extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <header style={ headerCSS }>
                        <h1>LRNZ</h1>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <Route exact path="/" component={ Home }></Route>
                </Fragment>
            </Router>
        );
    }
}

export default App;
