import React         from "react";
import { Component } from "react";

class Intro extends Component{
    render(){
        return(
            <section>
                <div>
                    <h2>6 key things to look for in any stock</h2>
                    <ol>
                        <li>Stock Price</li>
                        <li>Shares Outstanding</li>
                        <li>Market Cap</li>
                        <li>Cash</li>
                        <li>Debt</li>
                        <li>Enterprise Value</li>
                    </ol>
                </div>
                <div>
                    <h3>Stock Price</h3>
                    <p>The price of 1 share. Price fluctuates based on traders.</p>
                </div>
                <div>
                    <h3>Shares Outstanding</h3>
                    <p>All available shares of a corporation.</p>
                </div>
                <div>
                    <h3>Market Cap</h3>
                    <p>Market Cap = Stock Price X Shares Outstanding</p>
                </div>
                <div>
                    <h3>Cash</h3>
                    <p>
                        To find how much cash a company has we need to look at the financial statement known as
                        the balance sheet, one of three key financial statements.
                    </p>
                </div>
                <div>
                    <h3>Debt</h3>
                    <p>
                        To find how much debt a company has we need to look at the financial statement known as
                        the balance sheet, one of three key financial statements.
                    </p>
                </div>
                <div>
                    <h3>Enterprise Value</h3>
                    <p>EV = Market Cap - Cash + Debt</p>
                    <p>
                        Enterprise Value is the value of the company after taking cash into consideration.
                        Think of what the company can be bought for.
                    </p>
                </div>
                <div>
                    <h2><a href="https://sec.gov/search/search.htm">SEC</a></h2>
                    <p>
                        So where can we find such data? The link above will take to the SEC website where you can
                        look up financial data for any company.
                    </p>
                </div>
            </section>
        );
    }
}

export default Intro;
