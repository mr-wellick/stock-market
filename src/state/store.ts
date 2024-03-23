import { makeObservable, observable, action } from 'mobx';
import { APIRateLimit, BestMatches, TimeSeriesAPI, TimeSeriesData } from '../api/apitypes';

class Store {
  ticker: APIRateLimit | BestMatches | null = { bestMatches: [] };
  data: TimeSeriesData[] = [];
  dimensions = { width: 1400, height: 500, padding: 100, scaleBy: 2 };
  private static singleton: Store;

  private constructor() {
    makeObservable(this, {
      ticker: observable,
      data: observable,
      searchTickers: action,
      getStock: action,
    });
  }

  static get Instance() {
    // Do you need arguments? Make it a regular static method instead.
    return this.singleton || (this.singleton = new this());
  }

  async searchTickers(ticker: string) {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${
        import.meta.env.ALPHA_VANTAGE_API_KEY
      }`,
    );

    try {
      this.ticker = await res.json();
    } catch (error) {
      console.error('Failed to fetch ticker results', error);
      this.ticker = null;
      return;
    }
  }

  async getStock(symbol: string = 'IBM') {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${
        import.meta.env.ALPHA_VANTAGE_API_KEY
      }`,
    );

    let tickerData: TimeSeriesAPI;
    try {
      tickerData = await res.json();
    } catch (error) {
      console.error(error);
      this.data = [];
      return;
    }

    this.data = Object.keys(tickerData['Time Series (Daily)']).map((date) => ({
      x: new Date(date),
      y: +tickerData['Time Series (Daily)'][date]['4. close'],
    }));
  }
}

const singleton = Store.Instance;

export default singleton;
