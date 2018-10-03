import React         from "react";
import { Component } from "react";
import { Fragment }  from "react";
import { Input }     from "../../Components";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <Fragment>
                <section className="section-container">
                    <div className="section-container__form">
                        <Input/>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Home;