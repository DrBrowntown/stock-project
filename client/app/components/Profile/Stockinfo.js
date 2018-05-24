import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts'

const StockInfo = (props) => {
    const stockURL = window.location.pathname;
    const upperCaseURL = stockURL.toUpperCase().replace('/', '');
    const ticker = [];
    const lastRefreshed = [];
    const timezone = [];
    const rows = [];
  
    // console.log(upperCaseURL)

    if (props['data']['Meta Data']['2. Symbol'] === upperCaseURL) {
 
        // console.log(data['Time Series (Daily)'])
        const ticker = props['data']['Meta Data']['2. Symbol'];
        console.log(ticker);
        const lastRefreshed = props['data']['Meta Data']['3. Last Refreshed'];
        const timezone = props['data']['Meta Data']['5. Time Zone'];
        // const rows = [];
        const timeSeries = props['data']['Time Series (Daily)'];
         
        for (var key in timeSeries) {
            if (timeSeries[key]) {
                const finData = timeSeries[key];           
                const open = parseFloat(finData['1. open']);
                const high = parseFloat(finData['2. high']);
                const low = parseFloat(finData['3. low']);
                const close = parseFloat(finData['4. close']);
                const volume = parseFloat(finData['5. volume']);

                rows.push({
                    date: key,
                    open,
                    high,
                    low,
                    close,
                });                
            }
        }
    }
    return (
        <div>
            <p>Symbol: {ticker}</p>
            <p>Last Refreshed: {lastRefreshed}</p>
            <p>Timezone: {timezone}</p>
            <br />

                <LineChart width={600} height={300} data={rows}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="open" stroke="#8884d8" dot={false} />
                    <Line type="monotone" dataKey="high" stroke="#82ca9d" dot={false} />
                    <Line type="monotone" dataKey="low" stroke="#B4045F" dot={false} />
                    <Line type="monotone" dataKey="close" stroke="#868A08" dot={false} />
                    
                </LineChart>
        </div>
    )
};
        
  

export default StockInfo;
