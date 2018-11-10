import React               from "react";
import { Component }       from "react";
import { Input }           from "../../Components/";
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
                <Input/>
                <Dialog>
                    <Dialog.Errors/>
                    <Dialog.Warnings/>
                    <Dialog.Duplicate/>
                </Dialog>
                <Toggler>
                    {({successData, onChange, activeIndex}) => (
                        <>
                            <StockSelector successData={ successData } onChange={ onChange }/>
                            <Chart successData={ successData[activeIndex] }/>
                        </>
                    )}
                </Toggler>
            </>
        );
    }
}

export default Home;
