import React               from "react";
import { Component }       from "react";
import { Dialog }          from "../../Components/";
//import { Loader }          from "../../Components/";
//import { Table }           from "../../Components/";
import { Toggler }         from "../../Components/";
import { StockSelector }   from "../../Components/";
import { Chart }           from "../../Components/";
import "./home.scss";

class Home extends Component{
    render(){
        return(
            <>
                <Dialog>
                    <Dialog.Errors/>
                    <Dialog.Warnings/>
                    <Dialog.Duplicate/>
                </Dialog>
                <Toggler>
                    {({successData, onChange, activeIndex}) => (
                        <div>
                            <Chart successData={ successData[activeIndex] }/>
                            <StockSelector successData={ successData } onChange={ onChange }/>
                        </div>
                    )}
                </Toggler>
            </>
        );
    }
}

export default Home;
