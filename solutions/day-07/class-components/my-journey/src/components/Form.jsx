import React, { Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    country: "",
    title: "",
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("on line 20 ~ this.state: ", this.state);
  };

  render() {
    const { firstname, lastname, country, title } = this.state;
    return (
      <div className="flex paragraph">
          <div className="form-wrapper">
            <h3>Add student</h3>
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={country}
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChangeHandler}
                />
              </div>
              <button className={`button button--submit margin`} type="submit">Submit</button>
            </form>
          </div>
      </div>
    );
  }
}

export default Form;
