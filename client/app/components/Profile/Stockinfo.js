import React from 'react';

const StockInfo = (props) => {
    const {
        data,
    } = props;
    const ticker = data['Meta Data']['2. Symbol'];
    const lastRefreshed = data['Meta Data']['3. Last Refreshed'];
    const timezone = data['Meta Data']['5. Time Zone'];


    return (
        <div>
            <p>{ticker}</p>
            <p>{lastRefreshed}</p>
            <p>{timezone}</p>
            <br />
        </div>
    )
};

export default StockInfo;
