import { makeObservable, observable, action } from 'mobx';
import { ChartData } from '../api/apitypes';

class Store {
  data: ChartData[] = [];

  constructor() {
    makeObservable(this, {
      data: observable,
    });
  }
}

export default Store;
