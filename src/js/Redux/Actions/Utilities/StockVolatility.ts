class StockVolatility{
    private prices: Array<any>;
    private newLength: number;
    private rmFirstEntry: Array<any>;
    private rmLastEntry: Array<any>;

    constructor(prices: Array<any>){
        // the newest stock prices are at the beginning of the array.
        // we need the oldest stock prices to be at the beginning of the array.
        // if not, we will erroneously calculate the percent changes over time.
        // hence, the prices.reverse().
        this.prices       = prices.reverse();
        this.newLength    = this.prices.length - 1;
        this.rmFirstEntry = this.prices.slice(1);
        this.rmLastEntry  = this.prices.slice(0, this.newLength);
    }

    private setNumerator(){
        let numerator: Array<any> = [];
        for(let i = 0; i < this.newLength; i++)
            numerator.push( this.rmFirstEntry[i] - this.rmLastEntry[i] );

        return numerator;
    }

    private setDenominator(){
        let denominator: Array<any> = this.rmLastEntry;
        return denominator;
    }

    public getVolatility(){
        let numerator: Array<any>     = this.setNumerator();
        let denominator: Array<any>   = this.setDenominator();
        let percentChange: Array<any> = [];

        for(let i = 0; i < this.newLength; i++)
            percentChange.push( (numerator[i] / denominator[i]).toFixed(3) );

        // here, we lose one entry when doing calculations. So, percentChange has length n - 1.
        // but all of our original stock data has length n.
        // Thus, we add an empty entry, "0," to match our original length n.
        percentChange = ["0"].concat(percentChange);
        percentChange = percentChange.map(item => Number(item));

        // finally, we need to reverse our data once more to line up with
        // our original data.
        return percentChange.reverse();
    }
}

export default StockVolatility;
