// React & React-Router
import React, { Component, Fragment }           from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import user defined components
import { Home } from "./Views";

// Application
class App extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <header>
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
