import React from "react";

class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    // console.log(
    //   "🚀 ~ file: ActionButton.jsx ~ line 6 ~ ActionButton ~ constructor ~ props",
    //   this.props
    // );
    this.state = {
      actions: this.props.actions,
      text: this.props.text,
    }
  }

  

  render() {
    // const { actions, text } = this.props;
    return (
      <button
        className={
          this.state.text === `Subscribe`
            ? `button button--submit`
            : `button button--submit margin`
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
