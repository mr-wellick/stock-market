import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import "./stockNews.scss";

class StockNews extends Component{
    static propTypes = {
        stockNews: PropTypes.array
    }

    render(){
        if(!this.props.stockNews)
            return null;

        let { stockNews } = this.props;

        return(
            <div>
                {
                    stockNews.map( (item, index) =>
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
