import React           from "react";
import { Component }   from "react";
import { Fragment }    from "react";
import { Input }       from "../../Components/";
import { Dialog }      from "../../Components/";
import { Select }      from "../../Components/";
//import { Loader }    from "../../Components/";
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
                        <Dialog.Error/>
                        <Dialog.Warning/>
                        <Dialog.Duplicate/>
                        <Dialog.Success/>
                    </Dialog>
                </section>
                <section className="main-content">
                    <Table/>
                    <Toggler>
                        {(data, onChange, activeData) => (
                            <Fragment>
                                <ActiveStock successData={ data } onChange={ onChange }/>
                                <LineChart activeData={ activeData }/>
                            </Fragment>
                        )}
                    </Toggler>
                </section>
            </Fragment>
        );
    }
}

export default Home;
