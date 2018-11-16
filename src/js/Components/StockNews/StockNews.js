import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import "./stockNews.scss";

class StockNews extends Component{
    static propTypes = {
        stockData: PropTypes.object
    }

    render(){
        if(!this.props.stockData)
            return null;

        let { news } = this.props.stockData;

        return(
            <div>
                {
                    news.map( (item, index) =>
                        <div key={ index }>
                            <div>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={ item["url"] }>
                                    {
                                        `${item["source"]}: ${ item["headline"] }`
                                    }
                                </a>
                            </div>
                            <div>
                                <p>{ item["summary"] }</p>
                                <p>{ item["datetime"] }</p>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default StockNews;