# Desktop Display (in progress)
![nothing-to-show](./demos/tour.gif)

# Using the app
+ Supply a single stock ticker such as: TSLA, AAPL, IBM, etc...
+ Each query will return a graph, common stock metrics, and current news related to each stock.
+ Each result will be stored, and you'll be able to toggle between all stocks you queried.

# App Errors/Duplicate-Entries
+ __Duplicate-Entries__: If you enter a stock already in state, that stock won't be retrieved.
+ __Errors__: Invalid stock entries will result in an error.

# Reminders
+ Format FinancialsChart & Histogram axes
+ HTML: StockSelector takes in an array of length n and renders a form with radio buttons .
    + StockSelector let's you delete any of the items in the form by selecting its corresponding delete node (length of n - 1)
    + However, If the 0th position in the form isn't selected and you delete a node, the component re-renders successfully but
    doesn't "defaultCheck" our new 0th position.
+ Figure out how to add multiple lines to a FinancialsChart. 
+ Rework UI
+ Start bundle splitting.

# Disclaimer
+ Not intended to replace a financial advisor
