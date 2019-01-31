import React, { Component } from 'react';
import Profile from './Profile';

interface MyProps {
    profiles: any;
    onClickProfile: any;
}

interface MyState {
    profiles: any
}

export default class ProfileListing extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const listItems = this.props.profiles.map((profile: any) =>
            <Profile key={profile.id} profile={profile} onClickProfile={this.props.onClickProfile} />
        );
        return (<div><div><h3>Select users:</h3></div>{listItems}</div>);
    }
}
