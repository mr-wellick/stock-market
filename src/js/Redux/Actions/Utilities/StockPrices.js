class StockPrices{
    constructor(prices){
        this.prices       = prices.reverse();
        this.newLength    = this.prices.length - 1;
        this.rmFirstEntry = this.prices.slice(1);
        this.rmLastEntry  = this.prices.slice(0, this.newLength);
        this.setNumerator();
        this.setDenominator();
    }

    setNumerator(){
        let numerator = [];
        for(let i = 0; i < this.newLength; i++)
            numerator.push( this.rmFirstEntry[i] - this.rmLastEntry[i] );

        this.numerator = numerator;
    }

    setDenominator(){
        this.denominator = this.rmLastEntry;
    }

    findPercentChange(){
        let percentChange = [];
        for(let i = 0; i < this.newLength; i++)
            percentChange.push( (this.numerator[i] / this.denominator[i]).toFixed(3) );

        // Add zero since we lose one entry
        percentChange = [0].concat(percentChange);

        return percentChange.reverse();
    }
}

export default StockPrices;
