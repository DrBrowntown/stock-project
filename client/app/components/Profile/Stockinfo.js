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

                <LineChart width={600} height={300} data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                   <XAxis dataKey="name"/>
                   <YAxis/>
                   <CartesianGrid strokeDasharray="3 3"/>
                   <Tooltip/>
                   <Legend />
                   <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
        </div>
    )
};

export default StockInfo;
