import React                 from "react";
import PropTypes             from "prop-types";
import { Component }         from "react";
import { connect }           from "react-redux";
import { deleteSingleStock } from "../../Redux/";
import "./toggler.scss";

class Toggler extends Component{
    static propTypes = {
        children: PropTypes.func,
        stockData: PropTypes.array,
        deleteSingleStock: PropTypes.func
    }

    state = {
        activeIndex: 0,
        selectedChart: "HistoricalChart",
        width: window.innerWidth*0.80,
        height: window.innerHeight*0.79,
        padding: 40
    }

    handleChartResize = () => {
        this.setState({
            width: window.innerWidth*0.80,
            height: window.innerHeight*0.79
        });
    }

    deleteStock = (event) => {
        let stockToDelete = event.target.className;

        if(this.props.stockData.length > 1)
        {
            this.props.deleteSingleStock(stockToDelete);
            this.setState({
                activeIndex: 0
            });
        }
    }

    onChangeChart = (event) => {
        // use props to select a single chart
        this.setState({
            selectedChart: event.target.value
        });
    }

    onChange = (event) => {
        // use props to select a single data set
        this.setState({
            activeIndex: event.target.value
        });
    }

    propCollection(){
        return {
            stockData: this.props.stockData,
            onChange: this.onChange,
            activeIndex: this.state.activeIndex,
            width: this.state.width,
            height: this.state.height,
            padding: this.state.padding,
            onChangeChart: this.onChangeChart,
            selectedChart: this.state.selectedChart,
            deleteStock: this.deleteStock
        };
    }

    render(){
        return(
            this.props.children(this.propCollection())
        );
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleChartResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleChartResize);
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, { deleteSingleStock })(Toggler);
