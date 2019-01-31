import React, { Component } from 'react'

interface MyProps {
    addUser: any;
}

export default class CreateUser extends Component<MyProps> {

    state = {
        firstName: "",
        lastName: "",
        userName: "",
        profilePicture: "",
        isSelected: false,
    }

    handleTxtChange = (event: any) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h3>Add user:</h3>
                <div>
                    <input onChange={this.handleTxtChange} value={this.state.firstName} id="firstName" className="app-input-txt-field" type="text" placeholder="Firstname" />
                    <input onChange={this.handleTxtChange} value={this.state.lastName} id="lastName" className="app-input-txt-field" type="text" placeholder="Lastname" /><br />
                    <input onChange={this.handleTxtChange} value={this.state.userName} id="userName" className="app-input-txt-field" type="text" placeholder="Username" />
                    <input onChange={this.handleTxtChange} value={this.state.profilePicture} id="profilePicture" className="app-input-txt-field" type="text" placeholder="Profile picture URL" />
                    <input onClick={this.props.addUser.bind(this, this.state)} className="app-input-btn-field" type="button" value="Add"></input>
                </div>
            </div>
        )
    }
}
