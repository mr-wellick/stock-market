import React              from "react";
import { Component }      from "react";
import { Fragment }       from "react";
import PropTypes          from "prop-types";
import { connect }        from "react-redux";
import { fetchData }      from "../../Redux";
import { Select }         from "../../Components";
import { Input }          from "../../Components";
import { Loading }        from "../../Components";
import { PossibleErrors } from "../../Components";
import { Table }          from "../../Components";
import { LineChart }      from "../../Components";
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
                    <PossibleErrors/>
                    <Table/>
                    <LineChart/>
                </section>
            </Fragment>
        );
    }

    //componentDidMount(){
    //    let { assetNames } = this.props;
    //    this.props.fetchData(assetNames);
    //}

}

let mapState = (state) => {
    return {
        ...state.userInteraction
    };
};

Home.propTypes = {
    fetchData: PropTypes.func
};

export default connect(mapState, { fetchData })(Home);
