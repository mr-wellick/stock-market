import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import "./style.scss";

class StockNews extends Component{
    static contextType = StockMarketConsumer;

    render(){
        const { stockMarketData, activeIndex } = this.context;

        if(stockMarketData.length === 0)
            return null;
        
        const { news } = stockMarketData[activeIndex];

        if(news.length === 0)
            return <h2>No News</h2>;

        return(
            <section className="news-section">
                <div className="news-title__container">
                    <h2 className="news-title">News</h2>
                </div>
                {
                    news.map( (item, index) =>
                        <div key={ index } className="news-item__container">
                            <div className="news-item__date-container">
                                <p className="news-item__date">
                                    { new Date(item["datetime"]).toDateString() } | {item["source"]} 
                                </p>
                            </div>
                            <div className="news-info__container">
                                <p>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={ item["url"] }
                                        className="news-info__link"
                                    >
                                        <span className="news-title">
                                            <b>{`${ item["headline"] }`}</b>
                                        </span>
                                        <br/>
                                        { item["summary"] }
                                    </a>
                                </p>
                            </div>
                        </div>
                    )
                }
            </section>
        );
    }
}

export default StockNews;