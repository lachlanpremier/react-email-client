import React, { Component } from 'react'

interface MyProps {
    profiles: any;
}

interface MyState {
    profiles: any
}

export default class SelectedProfileNames extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
    }

    getStyle = () => {
        return {
            display: this.props.profiles.filter((u: { isSelected: any; }) => u.isSelected).length ? "block" : "none"
        }
    }

    render() {
        const listItems = this.props.profiles.filter((u: { isSelected: any; }) => u.isSelected).map((profile: any) =>
            <li key={profile.id}>{profile.firstName} {profile.lastName}</li>
        );
        return (<div><h3 style={this.getStyle()}>Selected users:</h3><ul>{listItems}</ul></div>);
    }
}
