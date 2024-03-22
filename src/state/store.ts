import { makeObservable, observable, action } from 'mobx';
import { BestMatches } from '../api/apitypes';

class Store {
  ticker: BestMatches | null = { bestMatches: [] };

  constructor() {
    makeObservable(this, {
      ticker: observable,
      searchTickers: action,
    });
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
}

export default Store;
