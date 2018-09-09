function findPercentChange(arr)
{
    let newLength    = arr.length - 1;
    let rmFirstEntry = arr.slice(1);
    let rmLastEntry  = arr.slice(0, newLength);
    let numerator    = [];
    let denominator  = rmFirstEntry;
    let percentChage = [];

    for(let i = 0; i < newLength; i++)
        numerator.push( (rmLastEntry[i] - rmFirstEntry[i]) );

    for(let i = 0; i < newLength; i++)
        percentChage.push( (numerator[i] / denominator[i]).toFixed(3) );

    // Add zero since we lose one entry when finding percent change
    percentChage = [0].concat(percentChage);

    return percentChage;
}

export default findPercentChange;
