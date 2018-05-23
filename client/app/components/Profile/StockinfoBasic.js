import React from 'react';


    

const StockInfoBasic = (props) => {
    const {
        data,
    } = props;
    
    const ticker = data['Meta Data']['2. Symbol'];
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
    const closingPrice = data['Time Series (Daily)'][lastRefreshed]['4. close'];
    
    

 

    return (
        <div>
            <p>{ticker}</p>
            <p>{lastRefreshed}</p>
            <p>${closingPrice}</p>
            <br />

        </div>
    )
};

export default StockInfoBasic;
