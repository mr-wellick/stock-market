# Desktop display
![nothing to show](./screenshots/desktop-1.png)
![nothing to show](./screenshots/desktop-2.png)

# Mobile display
![nothing to show](./screenshots/mobile-1.png)
![nothing to show](./screenshots/mobile-2.png)

# App functionality
+ Query single/multiple stock(s).
+ Each query will show you a table with the latest monthly/daily adjusted price and percent change for each stock.
+ Invalid stock entries will be removed and an error will be thrown.
+ If you make too many consecutive calls, a warning will be thrown instructing you to: "wait a few seconds and try again."

# Using the app
+ Supply a single stock ticker: TSLA.
+ Or supply multiple valid stock tickers seperated by a comma: TSLA, AAPL, IBM, KO ....

# Reminders (so i don't forget)
+ Sidebar on desktop display (border-right) doesn't reach the top. Small gap between sidebar and navbar.
+ Rewrite css for StockSelector.js: top & bottom padding are uneven.
+ Landscape view for mobile devices generates a height that is too small to correctly render the graph. Remove graph for landscape view on mobile devices.
+ Add new media query to table. Design breaks around 800px
+ Start bundle splitting.
+ Add axis labels graph
+ Add d3 tool-tips to graph

# Disclaimer
+ Not intended to replace a financial advisor
