import React         from "react";
import { Component } from "react";
import { Fragment }  from "react";
import { Input }     from "../../Components";
import { Dialog }    from "../../Components";
import { Select }    from "../../Components";
//import { Loader }    from "../../Components";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <Fragment>
                <section className="section-container">
                    <div className="section-container__selection">
                        <p className="section-container__selection-info">
                            Choose monthly or daily data to retreive.
                        </p>
                        <Select/>
                    </div>
                    <div className="section-container__form">
                        <Input/>
                    </div>
                    <div className="section-container__messages">
                        <Dialog>
                            <Dialog.Error/>
                            <Dialog.Warning/>
                            <Dialog.Duplicate/>
                            <Dialog.Success/>
                        </Dialog>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Home;
