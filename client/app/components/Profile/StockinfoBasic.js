import React from 'react';
import moment from 'moment';

const StockInfoBasic = (props) => {
    const {
        data,
    } = props;
    
    const ticker = data['Meta Data']['2. Symbol'];
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
    const formattedLastRefresh = moment(lastRefreshed).format('YYYY-MM-DD');
    const closingPrice = data['Time Series (Daily)'][formattedLastRefresh]['4. close'];
    
    console.log(closingPrice);
          

 

    return (
        <div>
            <p>Symbol: <a href={ticker}>{ticker}</a></p>
            <p>Last Refreshed: {lastRefreshed}</p>
            <p>Closing Price: ${closingPrice}</p>
            <br />

        </div>
    )
};

export default StockInfoBasic;
