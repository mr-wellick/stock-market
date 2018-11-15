import { FETCH_NEWS } from "../Constants/";

function fetchStockNews(stockNews)
{
    return {
        type: FETCH_NEWS,
        stockNews
    };
}

export default fetchStockNews;
