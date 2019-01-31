import React, { Component } from 'react'

interface MyProps {
    profiles: any;
    sendMessage: any;
}

export default class WriteMessage extends Component<MyProps> {

    state = {
        subject: "",
        message: ""
    };

    handleTxtChange = (event: any) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h3>Write message:</h3>
                <input onChange={this.handleTxtChange} value={this.state.subject} id="subject" type="text" className="app-input-txt-field" placeholder="Subject" />
                <textarea onChange={this.handleTxtChange} value={this.state.message} id="message" className="app-input-txt-field" placeholder="Message" style={{ height: "150px", width: "400px" }}></textarea>
                <input onClick={this.props.sendMessage.bind(this, this.state.subject, this.state.message)} className="app-input-btn-field" type="button" value="Send Message"></input>
            </div>
        )
    }
}
