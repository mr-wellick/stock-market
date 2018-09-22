import React              from "react";
import { Component }      from "react";
import { Fragment }       from "react";
import PropTypes          from "prop-types";
import { connect }        from "react-redux";
import { fetchData }      from "../../Redux";
import { Input }          from "../../Components";
import { Select }         from "../../Components";
import { Loading }        from "../../Components";
import { Table }          from "../../Components";
import { PossibleErrors } from "../../Components";
import "./home.scss";

class Home extends Component{
    render(){
        let { requestingData } = this.props.isFetchingData;
        let { successData }    = this.props.receivedData;

        return(
            <Fragment>
                <section className="section-forms">
                    <Select/>
                    <Input/>
                </section>
                <section className="section-data">
                    <PossibleErrors/>
                    {
                        // Render succesful data
                        (() => {
                            if(requestingData)
                                return (<Loading/>);
                            else if(successData.length > 0)
                                return(<Table/>);
                        })()
                    }
                </section>
            </Fragment>
        );
    }

    //componentDidMount(){
    //    let { assetsName } = this.props.userInteraction;
    //    this.props.fetchData(assetsName);
    //}

}

// Map state to props
let mapState = (state) => {
    return {
        ...state
    };
};

// Map dispatch to props
let mapDispatch = (dispatch) => {
    return {
        fetchData: (assetNames) => {
            dispatch(fetchData(assetNames));
        }
    };
};

// PropType checking
Home.propTypes = {
    userInput: PropTypes.func,
    fetchData: PropTypes.func,
    isFetchingData: PropTypes.object,
    receivedData: PropTypes.object,
    userInteraction: PropTypes.object
};

export default connect(mapState, mapDispatch)(Home);
