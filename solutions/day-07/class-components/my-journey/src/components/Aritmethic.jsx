import React from "react";

class Aritmethic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  substractOne = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="action-center" id="change-states">
        <h3 className="margin">
          Class-based CTA button component with stateful reset
        </h3>
        <div className="aritmethic-box">
          <p className="">{this.state.count}</p>
          <button className="button button--submit " onClick={this.addOne}>
            Add one
          </button>
          <button className="button button--submit" onClick={this.substractOne}>
            Substract one
          </button>
        </div>
      </div>
    );
  }
}

export default Aritmethic;
