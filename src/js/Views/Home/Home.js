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
import { LineChart }      from "../../Components";
import "./home.scss";

class Home extends Component{
    render(){
        let { requestingData } = this.props;

        return(
            <Fragment>
                <section className="section-forms">
                    <Select/>
                    <Input/>
                </section>
                <section className="section-data">
                    { requestingData ? <Loading/> : <PossibleErrors/> }
                    <Table/>
                    <LineChart/>
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
        ...state.isFetchingData
    };
};

Home.propTypes = {
    fetchData: PropTypes.func,
    requestingData: PropTypes.bool
};

export default connect(mapState, { fetchData })(Home);
