import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import Card                    from "@material-ui/core/Card";
import CardContent             from "@material-ui/core/CardContent";
import Typography              from "@material-ui/core/Typography";
import CardActions             from "@material-ui/core/CardActions";
import Button                  from "@material-ui/core/Button";
import "./style.scss";

class AppNotifications extends Component{
    static contextType = StockMarketConsumer;

    restrictScrolling(){
        const body = document.querySelector("body");

        if(!body.className.includes("restrict-scrolling"))
            body.className = "restrict-scrolling";
        else
            body.className = "";
    }

    render(){
        // can't get this to work in mounting/updating hooks
        this.restrictScrolling();

        const { appMessages } = this.context;

        if(!appMessages)
            return null;

        return(
            <div className="app-notifications__container">
                <Card className="app-notifications__card">
                    <CardContent>
                        <Typography>
                            The stock you entered, <b>{appMessages}</b>,
                            is incorrect or already in your list.<br/>
                            Please check your entry and try again.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={ this.context.resetApplicationMessages }
                        >
                            Clear Message
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default AppNotifications;