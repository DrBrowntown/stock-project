import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        };
    }

    render() {
        return (
            <div>
                <p>Profile</p>
            </div>
        );
    }
}

export default Profile;