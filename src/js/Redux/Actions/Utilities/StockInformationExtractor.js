import StockVolatility from "./StockVolatility.ts";

class StockInformationExtractor{
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

    getDateObjects(){
        return this.rawData.map( date => new Date(date[0]) );
    }

    getRawData(objectKey){
        return this.rawData.map( item => Number(item[1][objectKey]) );
    }

    getPercentChange(){
        let adjustedClose = this.getRawData("5. adjusted close").reverse();
        adjustedClose     = new StockVolatility(adjustedClose);
        return adjustedClose.getVolatility();
    }

    getProcessedStockData(){
        return {
            frequency:     this.getMetaData("1. Information").match(/\w+/)[0],
            stockName:     this.getMetaData("2. Symbol"),
            dates:         this.getDates(),
            dateObjects:   this.getDateObjects(),
            percentChange: this.getPercentChange(),
            open:          this.getRawData("1. open"),
            high:          this.getRawData("2. high"),
            low:           this.getRawData("3. low"),
            adjustedClose: this.getRawData("5. adjusted close")
        };
    }
}

export default StockInformationExtractor;
