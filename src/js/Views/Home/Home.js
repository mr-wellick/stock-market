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
        return(
            <Fragment>
                <section className="section-forms">
                    <Select/>
                    <Input/>
                </section>
                <section className="section-data">
                    <PossibleErrors/>
                    <Loading/>
                    <Table/>
                </section>
            </Fragment>
        );
    }

    //componentDidMount(){
    //    let { assetsName } = this.props;
    //    this.props.fetchData(assetsName);
    //}

}

let mapState = (state) => {
    return {
        ...state.userInteraction
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
    assetsName: PropTypes.array
};

export default connect(mapState, mapDispatch)(Home);
