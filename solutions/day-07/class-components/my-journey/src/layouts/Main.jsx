import React from "react";
import Journal from "../components/Journal";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiButton: this.props.actions.hiButton,
      datetimeButton: this.props.actions.datetimeButton,
      subscribe: this.props.actions.subscribe,
    };
  }

  // _isMounted = false;

  // componentDidMount() {
  //   this._isMounted = true;
  // }
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  render() {
    return (
      <section id="topics-section">
        {/* Journal section */}
        <Journal
          hiButton={this.state.hiButton}
          datetimeButton={this.state.datetimeButton}
        />
      </section>
    );
  }
}

export default Main;
