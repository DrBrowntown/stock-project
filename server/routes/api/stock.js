const request = require('superagent');

module.exports = (app) => {
    app.post('/api/stock/portfolio', function (req, res, next) {

        const tickers = [];

        // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=WO3CN6DU2D02X0QH
        request
           .get('/search')
           .query({ query: 'Manny' })
           .query({ range: '1..5' })
           .query({ order: 'desc' })
           .then(function(res) {

        });
    });
};