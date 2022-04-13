import { Component } from "react";

export default class OnMouseEnter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      p: {
        position: "",
        top: "",
        left: "",
        border: "1px solid var(--accent-color)",
        width: "80px",
        textAlign: "",
      },
    };
  }

  handleMouseEnter = (event) => {
    this.setState({
      p: {
        position: "relative",
        top: `${Math.floor(Math.random() * 90)}%`,
        left: `${Math.floor(Math.random() * 90)}%`,
        border: "1px solid var(--accent-color)",
        width: "80px",
        textAlign: "center",
      },
    });
  };

  render() {
    return (
      <div className="paragraph mt-3 flex">
        <div className="exercise-container">
          <p
            className="flex"
            style={this.state.p}
            onMouseEnter={this.handleMouseEnter}
          >
            Move me
          </p>
        </div>
      </div>
    );
  }
}
