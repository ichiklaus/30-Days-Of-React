import React from "react";

class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: this.props.actions,
      text: this.props.text,
    };
  }

  render() {
    return (
      <button
        className={
          this.state.text === `Subscribe`
            ? `button button--submit`
            : `button button--submit mt-2`
        }
        type="button"
        onClick={this.state.actions}
      >
        {this.state.text}
      </button>
    );
  }
}

export default ActionButton;
