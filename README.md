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
+ When a stock is deleted from the data array, the activeIndex selecting the stock in the
array isnt' update properly and can result in __undefined__ which renders nothing and we have to manually "activate"
the stock by selecting it. Pull activeIndex logic into redux state & either decrement activeIndex by 1 or reset activeIndex to 0.
+ Rework UI
+ Start bundle splitting.

# Disclaimer
+ Not intended to replace a financial advisor
