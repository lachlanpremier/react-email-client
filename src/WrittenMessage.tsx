import React, { Component } from 'react'

interface MyProps {
    theMessage: any;
    profiles: any;
}

interface MyState {
}

export default class WrittenMessage extends Component<MyProps, MyState> {
    render() {
        var profs = this.props.profiles.filter((p: any) => this.props.theMessage.recipients.indexOf(p.id) >= 0).map((p: any) => (
            <div key={p.id} style={{ float: "left", marginRight: "10px" }}><img style={{ maxWidth: "20px", maxHeight: "20px" }} src={p.profilePicture} /> {p.firstName} {p.lastName}</div>
        ));

        return (
            <div className="messageOuter">
                <div style={{ float: "left", marginRight: "10px" }}>To:</div>{profs}
                <div className="app-clearfix"></div>
                <b>Subject: {this.props.theMessage.subject}</b><br />
                Message: {this.props.theMessage.message}<br />
            </div>
        )
    }
}
