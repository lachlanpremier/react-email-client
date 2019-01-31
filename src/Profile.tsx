import React, { Component } from 'react'

interface MyProps {
    profile: any;
    onClickProfile: any;
    key: any;
}

interface MyState {
    isSelected: boolean
}

export default class Profile extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = { isSelected: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event: any) => {
        this.props.profile.isSelected = this.state.isSelected;
        this.setState(state => ({
            isSelected: !state.isSelected
        }));
        this.props.onClickProfile(this.props.profile);
    }

    getClassName = () => {
        if (this.state.isSelected) {
            return "profilePanel profileHighlighted";
        } else {
            return "profilePanel";
        }
    }

    render() {
        return (<div onClick={this.handleClick} className={this.getClassName()}>
            <div className='profilePicture'><img src={this.props.profile.profilePicture} /></div>
            <div className='userName'>{this.props.profile.firstName} {this.props.profile.lastName}</div>
            <div className='clearFix'></div>
        </div>
        );
    }
}
