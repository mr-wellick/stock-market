import React               from "react";
import { Component }       from "react";
import { Input }           from "../../Components/";
import { Dialog }          from "../../Components/";
import { Loader }          from "../../Components/";
import { Table }           from "../../Components/";
import { Toggler }         from "../../Components/";
import { StockSelector }   from "../../Components/";
import { Chart }           from "../../Components/";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <>
                <section className="main-sidebar">
                    <div className="sidebar-container">
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
                            <>
                                <StockSelector successData={ successData } onChange={ onChange }/>
                                <Chart successData={ successData[activeIndex] }/>
                            </>
                        )}
                    </Toggler>
                </section>
            </>
        );
    }
}

export default Home;
