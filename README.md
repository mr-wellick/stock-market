# Desktop display
![nothing to show](./screenshots/desktop-1.png)
![nothing to show](./screenshots/desktop-2.png)

# Mobile display
![nothing to show](./screenshots/mobile-1.png)
![nothing to show](./screenshots/mobile-2.png)
![nothing to show](./screenshots/mobile-3.png)

# NOTE
+ If you clone the repo, you must claim your [FREE API KEY](https://www.alphavantage.co/support/#api-key).
+ I am not affiliated with alphavantage.
+ Go to the file: `src/js/Redux/Actions/fetchData.js`. In there, you'll find the following line of code:
`fetch(https://www.alphavantage.co/query?${frequency}symbol=${stock}&apikey=${process.env.API_KEY})`.
    + Replace `&apikey=${process.env.API_KEY}` with `&apikey=YOUR_FREE_API_KEY`
+ Or just create a new environment variable named `API_KEY`, which stores your free api key details.

# App functionality
+ Query single/multiple stock(s).
+ Each query will show you a table with the latest monthly/daily adjusted price and percent change for each stock.
+ Invalid stock entries will be removed and an error will be thrown.
+ If you make too many consecutive calls, a warning will be thrown instructing you to: "wait a few seconds and try again."

# Using the app
+ Supply a single stock ticker: TSLA.
+ Or supply multiple valid stock tickers seperated by a comma: TSLA, AAPL, IBM, KO ....

# Reminders
+ Remove graph for landscape view on mobile devices. (working correctly. height is just too small for graph)
+ Fix css for dialog messages: Warning & Duplicate entries
+ Start bundle splitting.

# Disclaimer
+ Not intended to replace a financial advisor
