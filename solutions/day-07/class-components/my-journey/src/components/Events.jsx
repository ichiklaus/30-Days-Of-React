import { Component } from "react";

const flex = {
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "center",
};

const stylesForSpanValue = {
  border: "1px solid var(--accent-color)",
  borderRadius: "5px",
  padding: "0 .25rem",
};

const stylesForSpanLabel = {
  fontSize: "1.25rem",
  color: "var(--title-color)",
};

export default class Events extends Component {
  state = {
    firstname: "",
    message: "",
    key: "",
    status: "",
  };

  // Handler for click event
  handleClick = (event) => {
    this.setState({
      message: "Welcome to the world of events!",
    });
  };

  // Handler for event changer - Implemented
  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
      message: event.target.value,
    });
  };

  // Handler for mouse move event - Implemented
  handleMouseMove = (event) => {
    this.setState({
      message: "Mouse is moving over me",
    });
  };

  // Handler for submit event - Implemented
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("You clicked submit and submitted " + this.state.message);
  };

  // Handler for copying text - Implemented
  handleCopy = (event) => {
    this.setState({
      message: "Not allowed to copy this section",
    });
    event.preventDefault(); // With prevent default I enable the default behaviour of the method; in this case it doesn't allow the text on the element to be copied
  };

  // Handler for keys pressed - Implemented but not sure if its working as expected - the event works, but the state may not
  handleKeyPressed = (event) => {
    this.setState({
      message: `${event.target.value} has been pressed; its keycode is: ${event.charCode}`,
    });
  };

  // Handler for blur (when leaving an area by clicking outside of it)
  handleBlurr = (event) => {
    this.setState({
      message: "Input field has been blurred",
    });
  };

  // Handler for Focusing an element
  handleFocus = (event) => {
    this.setState({
      message: "Focused",
    });
  };

  render() {
    return (
      <div className="paragraph" style={flex}>
        <h4>Events in React</h4>
        <form
          onSubmit={this.handleSubmit}
          // style={{ display: "flex", alignItems: "center" }}
          className="flex events mb-4"
        >
          <div>
            <label htmlFor="firstname">Firstname: </label>
            <input
              onChange={this.handleChange}
              name="firstname"
              value={this.state.value}
            />
          </div>
          <button className={`button button--submit`} type="submit">
            Submit
          </button>
        </form>
        <div>
          <button
            className={`button button--submit mt-3`}
            onClick={this.handleClick}
          >
            Click me!
          </button>
        </div>
        <div>
          <button
            className={`button button--submit mt-3`}
            onMouseMove={this.handleMouseMove}
          >
            Move over me
          </button>
        </div>
        <p
          className="mt-5"
          style={{
            padding: ".35rem .5rem",
          }}
        >
          <span style={stylesForSpanLabel}>Value for target value:</span>{" "}
          <span style={stylesForSpanValue}>{this.state.message}</span>
        </p>
        <p onCopy={this.handleCopy}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          amet rerum! Cumque iusto cum dolore voluptatibus molestiae? Suscipit
          excepturi, vel similique nemo iusto consectetur officia earum commodi
          pariatur minima et?
        </p>
        <label className="mb-2" htmlFor="">
          Test for Key pressed, Blur, and Focus
        </label>
        <input
          type="text"
          onKeyDown={this.handleKeyPressed}
          onBlur={this.handleBlurr}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}
