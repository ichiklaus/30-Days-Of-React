import React, { Component } from "react";

import TimeForm from "../../components/TimeForm";

class ExtraContent extends Component {
    constructor (props){
        super(props);

        this.fetchCurrentTime = this.fetchCurrentTime.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            currentTime: null,
            message: 'now',
            timezone: 'PST',
        };
    };

    fetchCurrentTime() {
        fetch(this.getAPIUrl())
        .then(response => response.json())
        .then(response => {
            const currentTime = response.dateString;
            this.setState({
                currentTime,
            });
        })
    };

    getAPIUrl() {
        const { timezone, message } = this.state;
        const host = 'https://andthetimeis.com';
        return `${host}/${timezone}/${message}.json`;
    };
    handleFormSubmit(event) {
        this.fetchCurrentTime(event)
    };

    handleChange(newState) {
        this.setState(newState);
    };

  render() {
    return (
      <div className="main-wrapper">
        <h2>Fetching data</h2>
        {!this.state.currentTime && 
            <button onClick={this.fetchCurrentTime}>Get current time</button>
        }
        {this.state.currentTime &&
            <p className="paragraph">The current time is: {this.state.currentTime}</p>
        }
        <TimeForm 
            onFormSubmit={this.handleFormSubmit}
            onFormChange={this.handleChange}
            timezone={this.state.timezone}
            message={this.state.message}
        />
      </div>
    );
  }
}

export default ExtraContent;
