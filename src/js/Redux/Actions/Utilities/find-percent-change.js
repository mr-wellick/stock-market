function findPercentChange(arr)
{
    // Reverse array to properly compute percent changes
    arr              = arr.reverse();
    let newLength    = arr.length - 1;
    let rmFirstEntry = arr.slice(1);
    let rmLastEntry  = arr.slice(0, newLength);
    let numerator    = [];
    let denominator  = rmLastEntry;
    let percentChage = [];

    for(let i = 0; i < newLength; i++)
        numerator.push( (rmFirstEntry[i] - rmLastEntry[i]) );

    for(let i = 0; i < newLength; i++)
        percentChage.push( (numerator[i] / denominator[i]).toFixed(3) );

    // Add zero since we lose one entry when finding percent change
    percentChage = [0].concat(percentChage);

    // Reverse once more to match dates
    return percentChage;
}

export default findPercentChange;
