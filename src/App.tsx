import React, { Component } from 'react';
import ProfileListing from './ProfileListing';
import SelectedProfileNames from './SelectedProfileNames';
import uuid from 'uuid';
import CreateUser from './CreateUser';
import WriteMessage from './WriteMessage';
import WrittenMessage from './WrittenMessage';

interface MyProps {

}

interface MyState {
  profiles: any,
  messages: any[],
}

class App extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      profiles: [
        {
          id: uuid.v4(),
          isSelected: false,
          firstName: "Lachlan",
          lastName: "Pearce",
          userName: "lachlan",
          profilePicture: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMBAv/EADoQAAEEAQEEBggEBQUAAAAAAAEAAgMEBREGEiExEyJBYYGhBzJCUXGRscFDUtHhFSM0cnMWJDOSov/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A3FERAREQERfCQASToBxKD6ir+S2vxNJxYyV1mQc2wjUf9uShZNv37x6LHN3ezel4/RBekVMp7ewPeG3KckQPtRu3gPDgrVQv1chAJqczZYz2tPLuI7EHSiIgIiICIiAiIgIiIPh4ArMdqtopcrZfBXkLaLDoAD/yd5+yuu1900sBZewkPkAiaR2b3A+WqypWAiIqgurG5G1i7TbFOTdcObT6rx7iFyog13BZaDMUm2Ieq4cJIyeLHKSWWbG5F1DOQt10isERPHeeR+f1WprKiIiAiIgIiICIiCnekl7hRpxj1XTFx8G/uqCtO25pG3gpJGDV9ZwlHwHB3kSfBZirEoiIqgiIg/cDiyeJ7fWa9pHx1W2LJNl6Rv52rFp1GP6R/wAG8froPFa2pVgiIooiIgIiICIiCG2w3v8ATl7cJB3Brp7t4arKByWzZOoL2PsVSd3poyzX3ajmses15atiSvYYWSxu3XNPYVYPNERVkREQT+wskjNooWRuIa9jw8e8aa/UBagFnno7pvkyU1stPRxRlgdpw3jp9vqtDUrQiIoCIiAiIgIiICo3pExmnQ5OJvujm0/8n7fJXlQm2UrI9nLm/wC00NHxJGiDK0RFpkXpXgkszxwQjWSVwYwd5XmpfZKMybR0QOx5d8gSpVabiqEWMoQ1IB1Y28T+Y9p8V1oOSKKIiICIiAiIgIorJbQ4vG6tsWmmQfhx9Z3yHLxVXvbezuJbQqMjb+eY6n5D9UF8J0UNDk8fmrl3FgtmjjYA73P48dD3cFneQz2UyALbNyQsPONnVb8hzXzZ+/8Aw3MVbBOkbXbr/wC08D+vgriPbaHBT4Wxo7V9Z5/lS/Y96iVtU0MVmF8U8bZI3jRzXDUFZpZo4YbUNpRyzimZNx5BHVfr6oPu14apoi8bjbeTsdDShMjvadya3vJ7FfMXszSwlZ923Nv2I2Fxm5CLh7IVgpU69KBsFSFsUTeTWjz+KqnpCynRwR4yJ3Wk68un5eweJ+iCx4PKw5egyzAdDyew82O9xUgsgw2YtYewZqpBDho+N3Frx+quFDbypJoL1aWB3a5nXb+qirei4qGWx+QH+ztxSn8od1h4c12oCIiCnZbbmKCR8OPrmZ7SWmSXqt17hzPkqrkdoMpkdRPac2M/hx9Vvlz8VwW/6uf/ACO+pXkria+AAcgAvqIqCcDzRERpFXKWbOxLrVTV1uOEsJ7QW8CfjpxWbdiuXo5u7lizQeerI3pGDvHA+WnyVZzccUOVuxVxpEyZ7Wgdg15KK1DDXJXYCtcv9Rwg35HHtAHreI4rLcndkyN+e5LrvSu1AJ9Udg+S0Xa+02psxI2MgdM1sTB3H9tVmKQERFQ7Qe0clLUNpMtQ0EVt0jB7E3XHnx81EomC/wCK26rTER5KI13H8RnWZ49o80VARTDXrb/q5/8AI76leSIqgiIgIiIOzD3Tj8pWtgnSOQF2na3kfLVc9uTp7U8p/Ekc75kn7oiKls7mf4jjcXWDtTBD/N/v9X6DXxUKiICIiIIiICIiD//Z"
        },
        {
          id: uuid.v4(),
          isSelected: false,
          firstName: "Karen",
          lastName: "Yang",
          userName: "karen",
          profilePicture: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwcBAgYFBP/EADMQAAIBBAAEAggEBwAAAAAAAAABAgMEERIFBiExUWETIkFxgaGx0RQVMpEjM0JSY4LB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOmGDbAwBrgYNsDAGuBjwPk4nxCjw6hvV9ab/RBPrJ/Y5C+4pd3tVznUlCPZQg2kkB117xK0spKNxWSk/wClJtr4Iip8b4dPtcxXTPrRa+qOJAFh0K9G4hvQqwqR7Zi8khXtvc17We9vVnTft1ff3r2nsWPMtelJq9gq0H2cUoyX3A6oYNaFSFejCrSkpQmspkmANcDBtgYA1wYN8ADfUam+BgDTU+e+uIWVpUuKibjTWcL2+xH1YPC5xclw2mk+jrLbz6MDlLy6q3lxOvXlmUvkvBeRCAAAAAAAety9xGta3tG322oVZqLg/Y30TXxwdrjwK1UnBqcekovKLNWJJSi8prKYGuo1NsDAGmDJtgASYGCTUYAjwc/zol+W0ejz6Zdl5M6TB5vMVr+J4Pcx7OMfSL/Xr9wK7AAAAAAABtTjvUhBvG0ks5wWhrjoirovWSlhPDzh9mWjQmq9CnVj2qRUl8VkBgYN9TOAI8A31AEmBgl1GoEep8fGIt8JvVHv6Cf0Z6GprVoxrUp0prMJxcZe5gVGDM46TlDOdW11WOxgAAAAAAyoym1GKzKTwl5lqWture2o0I9qcFD9lg4LlKzV5xqlsswofxX0z1Xb54LG1Aj1GpJqNQI9QSagCXUxqS6jUCPUakmo1A4fn6xjTla3lOnGOzlCo4rGX3TfzOQLP5tt4VuXrv0iz6OKnHyaZWAAAAA+iBNZ041by3pzWYzqxjJeKbQFn8EtfwvCLOi1hxpRcve+r+bZ9upLrh9BqBFqNSXUagRagl1MAS4GCXUagRajUl1DSSbfZLIHkcywUuX+IJ+yhJ/sslTHUc18zVb25qWvDq7ViouEnFfzc9/gcuAAAAkt6vobilVxn0c4yx44eSMAWjwTmSx4xWdCjGpSrqLlpUS6pd8NHtalQ8H4jPhXEaN5TgpunnMP7k1hot+3q07m3p16MtqdSKlF+KYGNRgl1GoEWpkk1AEupDcXFvbLNzcUqK/yTUfqVrxjnPid/OUbWbs7d9o0367XnL7YObm3ObnUbnN95SeW/iBZ1/zrwi0rSpU3WuZReG6MVr8G2s/A5/mHnT8wsp2lhQqUYVVipUqNbY9qSXicgAAAAAAAAAB1XJfMlDhKnZ3sXGhVqbKsnnR4x1Xh7jlQBedNxqQjOnKMoSWYyi8pryNtSo+X+Y73glRKm/S2zfrUJPp714MtDgvF7PjNqq9nUy1+um/1U34Nf9A+zUEmABQwAAAAAAAAAAAAAAABPY3lxw+6hc2dWVOtDtJfR+K8gALU5W5ptuOU1Rq60b5L1qTfSfnH7ewyAB//2Q=="
        }
      ],
      messages: []
    };
  }

  onClickProfile = (updatedProfile: any) => {
    for (var i = 0; i < this.state.profiles.length; i++) {
      if (this.state.profiles[i].id === updatedProfile.id) {
        this.state.profiles[i].isSelected = !this.state.profiles[i].isSelected;
      }
    }
    this.setState({
      profiles: this.state.profiles
    });
  }

  onAddUser = (usrState: any) => {
    if (this.state.profiles.filter((e: any) => e.userName == usrState.userName).length == 0) {
      usrState.id = uuid.v4();

      this.setState({
        profiles: [...this.state.profiles, usrState]
      });
    }
  }

  getWriteMessageStyle = () => {
    return {
      display: this.state.profiles.filter((u: { isSelected: any; }) => u.isSelected).length ? "block" : "none"
    }
  }

  getOutboxStyle = () => {
    return {
      display: this.state.messages.length ? "block" : "none"
    }
  }

  onSendMessage = (subject: string, message: string) => {

    var selectedProfiles: any[] = [];

    this.state.profiles.forEach((profle: any) => {
      if (profle.isSelected)
        selectedProfiles.push(profle);
    });

    this.setState({
      messages: [...this.state.messages, {
        id: uuid.v4(), subject: subject, message: message, recipients: this.state.profiles.filter((pf: any) => pf.isSelected).map((pf: any) => pf.id)
      }]
    });
  }

  render() {
    var messagesToShow = this.state.messages.map((msg) =>
      (<WrittenMessage key={msg.id} theMessage={msg} profiles={this.state.profiles}></WrittenMessage>)
    )
    return (
      <div>
        <CreateUser addUser={this.onAddUser}></CreateUser>
        <div className="app-prof-listing"><ProfileListing profiles={this.state.profiles} onClickProfile={this.onClickProfile} /></div>
        <div className="app-selected-profs"><SelectedProfileNames profiles={this.state.profiles} /></div>
        <div style={this.getWriteMessageStyle()} className="app-write-message"><WriteMessage sendMessage={this.onSendMessage} profiles={this.state.profiles} /></div>
        <div className="app-clearfix"></div>
        <h3 style={this.getOutboxStyle()}>Outbox:</h3>
        <div style={this.getOutboxStyle()}>{messagesToShow}</div>
      </div>
    );
  }
}

export default App;
