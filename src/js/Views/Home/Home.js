import React                     from "react";
import { Component }             from "react";
import { Fragment }              from "react";
import { Select }                from "../../Components";
import { Input }                 from "../../Components";
import { Loading }               from "../../Components";
import { DroppedStock }          from "../../Components";
import { ExceededCallLimit }     from "../../Components";
import { DuplicateStockEntries } from "../../Components";
import { Table }                 from "../../Components";
import { LineChart }             from "../../Components";
import { ActiveStock }           from "../../Components";
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
                        <Dialog.Error><DroppedStock/></Dialog.Error>
                        <Dialog.Warning><ExceededCallLimit/></Dialog.Warning>
                        <Dialog.Duplicate><DuplicateStockEntries/></Dialog.Duplicate>
                    </Dialog>
                    <Table/>
                    <div className="section-data__active-stock">
                        <ActiveStock/>
                        <LineChart/>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Home;
