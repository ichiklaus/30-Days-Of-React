import React, { Component } from "react";

const timezones = ["PST", "MST", "MDT", "EST", "UTC"];

class TimeForm extends Component {
  constructor(props) {
    super(props);

    this._changeTimezone = this._changeTimezone.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._changeMessage = this._changeMessage.bind(this);

    const { timezone, message } = this.props;
    this.state = {
      timezone,
      message,
    };
  };

  _handleChange(event) {
    typeof this.props.onFormChange === "function" &&
      this.props.onFormChange(this.state);
  };

  _changeTimezone(event) {
    const timezone = event.target.value;
    this.setState({ timezone }, this._handleChange);
  };

  _changeMessage(event) {
    const message = encodeURIComponent(event.target.value).replace(/%20/g, "+");
    this.setState({ message }, this._handleChange);
  };

  _handleFormSubmit(event) {
    event.preventDefault();
    typeof this.props.onFormSubmit === "function" &&
      this.props.onFormSubmit(this.state);
  };

  render() {
      const { timezone } = this.state;
      return(
          <form className="paragraph" onSubmit={this._handleFormSubmit} >
              <select 
              name=""
              id=""
              onChange={this._changeTimezone}
              defaultValue={timezone}
              >
                  {timezones.map(timezone => {
                      return (
                          <option
                          value={timezone}
                          key={timezone}
                          >
                              {timezone}
                          </option>
                      )
                  })}
              </select>
              <input
              type="text"
              placeholder="A chronic string message (such as 7 hours from now)"
              onChange={this._changeMessage}
              />
              <input
              type="submit"
              value="Update requets"
              />
          </form>
      );
  };

};

export default TimeForm;
