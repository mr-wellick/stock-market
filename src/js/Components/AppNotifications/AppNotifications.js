import React                   from "react";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import Card                    from "@material-ui/core/Card";
import CardContent             from "@material-ui/core/CardContent";
import Typography              from "@material-ui/core/Typography";
import CardActions             from "@material-ui/core/CardActions";
import Button                  from "@material-ui/core/Button";
import "./appNotifications.scss";

class AppNotifications extends Component{
    static contextType = StockMarketConsumer;

    render(){
        const userStockEntry = this.context.duplicateEntry || this.context.errors;

        if(!userStockEntry)
            return null;

        return(
            <div className="app-notifications__container">
                <Card className="app-notifications__card">
                    <CardContent>
                        <Typography>
                            {`The stock you entered, ${userStockEntry}, is incorrect or already in your list. Please, try again.`}
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
