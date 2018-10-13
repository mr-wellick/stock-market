import StockPrices from "./StockPrices.js";

class StockInformation{
    constructor(data){
        this.baseData = Object.entries(data);
        this.metaData = this.baseData[0][1];
        this.rawData  = Object.entries(this.baseData[1][1]);
    }

    setStockName(){
        this.stockName = this.metaData["2. Symbol"];
        return this.stockName;
    }

    setStockDates(){
        this.dates = this.rawData.map( date => date[0] );
        return this.dates;
    }

    setStockOpenPrice(){
        this.open = this.rawData.map( open => open[1]["1. open"] );
        return this.open;
    }

    setStockHighPrice(){
        this.high = this.rawData.map( high => high[1]["2. high"] );
        return this.high;
    }

    setStockLowPrice(){
        this.low = this.rawData.map( low => low[1]["3. low"] );
        return this.low;
    }

    setStockAdjustedPrice(){
        this.adjustedClose = this.rawData.map( price => price[1]["5. adjusted close"] ).reverse();
        return this.adjustedClose;
    }

    setStockPercentChange(){
        let prices         = new StockPrices(this.adjustedClose);
        this.percentChange = prices.findPercentChange();
        return this.percentChange;
    }

    getProcessedStockData(){
        return {
            stockName:     this.setStockName(),
            dates:         this.setStockDates(),
            adjustedClose: this.setStockAdjustedPrice(),
            percentChange: this.setStockPercentChange(),
            open:          this.setStockOpenPrice(),
            high:          this.setStockHighPrice(),
            low:           this.setStockLowPrice()
        };
    }
}

export default StockInformation;