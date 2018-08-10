// Find percent change for prices
export default function findPercentChange(data)
{
    let rmFirstEntry = data.slice(1);
    let rmLastEntry  = data.slice(0, data.length -1 );
    let results      = [];

    for(let i = 0; i < rmFirstEntry.length; i++)
    {
        let numerator     = rmFirstEntry[i] - rmLastEntry[i];
        let denominator   = rmLastEntry[i];
        let percentChange = Number((numerator / denominator).toFixed(2));
        results.push(Number(percentChange));
    }

    return(results);
}
