import React from "react";
import TechsList from "./TechsList";
import ActionButton from "./ActionButton";

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "🚀 ~ file: Main.jsx ~ line 6 ~ Main ~ constructor ~ props",
      this.props
    );
  }

  render() {
    const {
      author: { firstname, lastname },
      getCurrentAge,
      techStack,
    } = this.props.myInfo;

    const {
      subscribe: { text: subscribeText },
      hiButton: { sayHi, text: hiText },
      datetimeButton: { showTime, text: datetimeText },
    } = this.props.actions;
    return (
      <div className="main-wrapper">
        <main>
          {/* Section about me */}
          <section className="about-me-section">
            <div className="about-me-header">
              <h2>/ about me</h2>
            </div>
            <p className="intro-description">
              My name's {firstname} {lastname}, {getCurrentAge()}. I'm currently
              working on my theses for my degree in Computer Systems Engineering
              at Universidad Técnica de Manabí of Portoviejo - Ecuador, while
              growing my career as a software engineer in web development.
            </p>
            <p className="intro-description">
              At some point I would like to design and develop videogames ever
              since I caught interest while experimenting with the Unity Game
              Engine.
            </p>
            <p className="intro-description">
              Here I will document my path to learning react in this 30 days
              challenge.
            </p>
          </section>
          {/* Section tech stack */}
          <section className="skills-section">
            <p className="description intro-description">
              So far I've been learning and working with technologies such as:{" "}
            </p>
            <div>
              <TechsList techStack={techStack} />
            </div>
          </section>
          {/* Contact me section */}
          <section className="contact-me-section intro-description">
            <div className="contact-box">
              <input type="text" id="email" placeholder="mail@example.com" />
              {/* <ActionButton actions={subscribeText} /> */}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
