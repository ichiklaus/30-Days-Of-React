import React, { Component } from "react";
import ActionButton from "../components/ActionButton";

export default class ContactMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribe: this.props.actions.subscribe,
    };
  }

  render() {
    return (
      <main className="main-wrapper">
        {/* Contact me section */}
        <section id="contact-me-section" className="paragraph">
          <h2>Get in touch</h2>
          <p>
            To contact me abouit any inquiries, please subscribe with your
            email.
          </p>
          <div className="contact-box">
            <input
              className="mb-4"
              type="text"
              id="email"
              placeholder="mail@example.com"
            />
            <ActionButton
              text={this.state.subscribe.text}
              actions={this.state.subscribe.subscribe}
            />
          </div>
        </section>
      </main>
    );
  }
}
