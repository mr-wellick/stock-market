import React           from "react";
import { Component }   from "react";
import { Fragment }    from "react";
import { Input }       from "../../Components/";
import { Dialog }      from "../../Components/";
import { Select }      from "../../Components/";
import { Loader }      from "../../Components/";
import { Table }       from "../../Components/";
import { Toggler }     from "../../Components/";
import { ActiveStock } from "../../Components/";
import { LineChart }   from "../../Components/";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <Fragment>
                <section className="main-sidebar">
                    <Select/>
                    <Input/>
                    <Dialog>
                        <Dialog.Errors/>
                        <Dialog.Warnings/>
                        <Dialog.Duplicate/>
                    </Dialog>
                </section>
                <section className="main-content">
                    <Loader/>
                    <Table/>
                    <Toggler>
                        {({successData, onChange, activeIndex}) => (
                            <Fragment>
                                <ActiveStock successData={ successData } onChange={ onChange }/>
                                <LineChart successData={ successData[activeIndex] }/>
                            </Fragment>
                        )}
                    </Toggler>
                </section>
            </Fragment>
        );
    }
}

export default Home;
