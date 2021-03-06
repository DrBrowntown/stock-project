import React, { Component } from 'react';
import 'whatwg-fetch';

import StockInfoBasic from '../../components/Profile/StockInfoBasic.js'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: null,
            results: [],
        };

        this.fetchProfileStockInfo = this.fetchProfileStockInfo.bind(this);
    }

    componentWillMount() {
        this.fetchProfileStockInfo();
    }

    fetchProfileStockInfo() {

        console.log('fetchProfileStockInfo');
        fetch('/api/stock/portfolio', { method: 'POST' })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        isLoading: false,
                        results: json.results,
                      
                    });
                } else {
                    this.setState({
                        isLoading: false,
                        error: json.message,
                    });
                }
            });
    }

    render() {
        const {
            error,
            isLoading,
            results
        } = this.state;

        if (isLoading) {
            return (
                <div>
                    <p>Load in progress...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div style={{ backgroundColor: '#610B21'}}>
                    <p style={{ color: '#fff'}}>{error}</p>
                </div>
            );
        }

        return (
            <div>
                <h1><a href="/profile">Portfolio</a></h1>
                {
                    results.map(result => <StockInfoBasic data={result} />)
                }
            </div>
        );
    }
}


export default Home;
