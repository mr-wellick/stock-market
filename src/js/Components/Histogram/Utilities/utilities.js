import _ from "lodash";

// For Histograms, we need to find the frequencies of our data points.
export function findFrequencies(data)
{

   // Find unique values in array.
   let unique_items = _.uniq(data);
   let count        = 0;
   let occurences   = [];

   // Iterate through unique items.
   for(let i = 0; i < unique_items.length; i++)
   {
       // Iterate through all data to find the occurences of each unique item.
       for(let j = 0; j < data.length; j++)
       {
           if(unique_items[i] === data[j])
               count++;
           else
               continue;
       }

       // Push count and reset count.
       occurences.push(count);
       count = 0;
   }

   // Return new array of frequency count for each unique element in our data.
   return(occurences);
}

// Find percent change for prices
export function findPercentChange(data)
{

    let rmFirstEntry = data.slice(1);
    let rmLastEntry  = data.slice(0, data.length -1 );
    let results      = [];

    for(let i = 0; i < rmFirstEntry.length; i++)
    {
        let numerator     = rmFirstEntry[i] - rmLastEntry[i];
        let denominator   = rmLastEntry[i];
        let percentChange = Number((numerator / denominator).toFixed(2));
        results.push(percentChange);
    }

    return(results);
}
