import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: null,
            results: [],
        };
    }

    fetchProfileStockInfo() {
        fetch('/api/stock/profile', { method: 'POST' })
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
            results,
        } = this.state;

        if (isLoading) {
            return (
                <div>
                    <p>Load in progress...</p>
                <div>
            );
        if (error) {
            return (
                <div style={{ backgroundColor: '#610B21'}}>
                    <p style={{ color: '#fff'}}>{error}</p>
                <div>
            );
        }
        return (
            <div>
                <p>Profile</p>
                {
                    results.map(result => <StockInfo data={result} />)
                }
            </div>
        );
    }
}

export default Profile;