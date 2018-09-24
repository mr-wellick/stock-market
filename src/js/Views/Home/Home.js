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
        let { successData }    = this.props.receivedData;
        let { requestingData } = this.props.isFetchingData;

        return(
            <Fragment>
                <section className="section-forms">
                    <Select/>
                    <Input/>
                </section>
                <section className="section-data">
                    <PossibleErrors/>
                    {
                        // Show loader when requesting data
                        requestingData ? <Loading/> :
                            // Otherwise render table
                            successData.length > 0 ? <Table/> : null
                    }
                </section>
            </Fragment>
        );
    }

    //componentDidMount(){
    //    let { assetNames } = this.props.userInteraction;
    //    this.props.fetchData(assetNames);
    //}

}

let mapState = (state) => {
    return {
        ...state
    };
};

let mapDispatch = (dispatch) => {
    return {
        fetchData: (assetNames) => {
            dispatch(fetchData(assetNames));
        }
    };
};

Home.propTypes = {
    userInput: PropTypes.func,
    fetchData: PropTypes.func,
    receivedData: PropTypes.object,
    isFetchingData: PropTypes.object,
    userInteraction: PropTypes.object
};

export default connect(mapState, mapDispatch)(Home);
