import React from 'react';


const today = new Date().format('MM/DD/YYY');

    

const StockInfoBasic = (props) => {
    const {
        data,
    } = props;
    
    const ticker = data['Meta Data']['2. Symbol'];
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
    const timezone = data['Meta Data']['Time Series (Daily)'];
    console.log(today);
    

 

    return (
        <div>
            <p>{ticker}</p>
            <p>{lastRefreshed}</p>
            <p>{timezone}</p>
            <br />

        </div>
    )
};

export default StockInfoBasic;
