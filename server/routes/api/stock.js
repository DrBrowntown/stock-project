const request = require('superagent');


module.exports = (app) => {
    app.post('/api/stock/portfolio', function (req, res, next) {
        const apiKey = 'WO3CN6DU2D02X0QH';
        const tickers = ['MSFT', 'SSYS', 'AAPL', 'NWL', 'CAT'];

        // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=WO3CN6DU2D02X0QH
        let completed = 0;
        const results = [];
        for (let i = 0; i < tickers.length; i += 1) {
            const ticker = tickers[i];
            request
               .get('https://www.alphavantage.co/query')
               .query({ 'function': 'TIME_SERIES_DAILY' })
               .query({ symbol: ticker })               
               .query({ apikey: apiKey })
               // .then(res => res.json())
               .then((response) => {
                    completed += 1;
                    //console.log('res', res.body['Meta Data']);
                    results.push(response.body);
                    if (completed === tickers.length) {
                        //all tickers have finished their requests

                        console.log('completed')

                        res.send({
                            success: true,
                            message: 'Ticker info',
                            results: results
                        });
                    }
            });
        }
    });
};