import React               from "react";
import { Component }       from "react";
import { Fragment }        from "react";
import { Input }           from "../../Components/";
import { Dialog }          from "../../Components/";
import { SelectFrequency } from "../../Components/";
import { Loader }          from "../../Components/";
import { Table }           from "../../Components/";
import { Toggler }         from "../../Components/";
import { StockSelector }   from "../../Components/";
import { LineChart }       from "../../Components/";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <Fragment>
                <section className="main-sidebar">
                    <div className="sidebar-container">
                        <SelectFrequency/>
                        <Input/>
                        <Dialog>
                            <Dialog.Errors/>
                            <Dialog.Warnings/>
                            <Dialog.Duplicate/>
                        </Dialog>
                    </div>
                </section>
                <section className="main-content">
                    <Loader/>
                    <Table/>
                    <Toggler>
                        {({successData, onChange, activeIndex}) => (
                            <Fragment>
                                <StockSelector successData={ successData } onChange={ onChange }/>
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
