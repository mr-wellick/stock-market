import StockVolatility from "./StockVolatility.js";

class StockInformation{
    constructor(data){
        this.baseData = Object.entries(data);
        this.metaData = this.baseData[0][1];
        this.rawData  = Object.entries(this.baseData[1][1]);
    }

    getMetaData(objectKey){
        return this.metaData[objectKey];
    }

    getDates(){
        return this.rawData.map( date => date[0] );
    }

    getRawData(objectKey){
        return this.rawData.map( item => item[1][objectKey] );
    }

    getPercentChange(){
        let adjustedClose = this.getRawData("5. adjusted close").reverse();
        adjustedClose     = new StockVolatility(adjustedClose);
        return adjustedClose.getVolatility();
    }

    getProcessedStockData(){
        return {
            stockName:     this.getMetaData("2. Symbol"),
            dates:         this.getDates(),
            adjustedClose: this.getRawData("5. adjusted close"),
            percentChange: this.getPercentChange(),
            open:          this.getRawData("1. open"),
            high:          this.getRawData("2. high"),
            low:           this.getRawData("3. low")
        };
    }
}

export default StockInformation;
