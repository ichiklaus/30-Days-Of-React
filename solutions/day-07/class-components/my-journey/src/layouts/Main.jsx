import React from "react";
import TechsList from "../components/TechsList";
import ActionButton from "../components/ActionButton";
import Journal from "../components/Journal";

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log(
  //     "🚀 ~ file: Main.jsx ~ line 6 ~ Main ~ constructor ~ props",
  //     this.props
  //   );
  // }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { hiButton, datetimeButton, subscribe } = this.props.actions;

    const {
      author: { firstname, lastname },
      getCurrentAge,
      techStack,
    } = this.props.myInfo;

    return (
      <div className="main-wrapper">
        <main>
          {/* Section about me */}
          <section id="about-me-section">
            <div id="about-me-header" className="section-header">
              <h2 className="section-title">/ about me</h2>
            </div>
            <p className="paragraph">
              My name's {firstname} {lastname}, {getCurrentAge()}. I'm currently
              working on my theses for my degree in Computer Systems Engineering
              at Universidad Técnica de Manabí of Portoviejo - Ecuador, while
              growing my career as a software engineer in web development.
            </p>
            <p className="paragraph">
              At some point I would like to design and develop videogames ever
              since I caught interest while experimenting with the Unity Game
              Engine.
            </p>
            <p className="paragraph">
              Here I will document my path to learning react in this 30 days
              challenge.
            </p>
          </section>
          {/* Section tech stack */}
          <section id="skills-section">
            <p className="description paragraph">
              So far I've been learning and working with technologies such as:{" "}
            </p>
            <div>
              <TechsList techStack={techStack} />
            </div>
          </section>
          {/* Contact me section */}
          <section id="contact-me-section" className="paragraph">
            <div className="contact-box">
              <input className="mb-4" type="text" id="email" placeholder="mail@example.com" />
              <ActionButton text={subscribe.text} />
            </div>
          </section>
          {/* Journal section */}
          <section id="topics-section">
            <Journal hiButton={hiButton} datetimeButton={datetimeButton} />
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
