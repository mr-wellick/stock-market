import React                     from "react";
import { Component }             from "react";
import { Fragment }              from "react";
import { Select }                from "../../Components";
import { Input }                 from "../../Components";
import { Loading }               from "../../Components";
//import { PossibleErrors }        from "../../Components";
//import { DuplicateStockEntries } from "../../Components";
//import { Table }                 from "../../Components";
//import { LineChart }             from "../../Components";
//import { ActiveStock }           from "../../Components";
import { Dialog }                from "../../Components";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <Fragment>
                <section className="section-forms">
                    <Select/>
                    <Input/>
                </section>
                <section className="section-data">
                    <Loading/>
                    <Dialog>
                        <Dialog.Error>
                            Error! Entered incorrect stock.
                        </Dialog.Error>
                        <Dialog.Warning>
                            Warning! Can only call 5 stocks per minute. Please wait and try again.
                        </Dialog.Warning>
                    </Dialog>
                    {/*
                    <PossibleErrors/>
                    <DuplicateStockEntries/>
                    <Table/>
                    <div className="section-data__active-stock">
                        <ActiveStock/>
                        <LineChart/>
                    </div>
                    */}
                </section>
            </Fragment>
        );
    }
}

export default Home;
