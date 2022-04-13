import { Component } from "react";
import TechsList from "../components/TechsList";
import { myInfo } from "../utils/MyInfo";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: myInfo.author.firstname,
      lastname: myInfo.author.lastname,
      getCurrentAge: myInfo.getCurrentAge,
      techStack: myInfo.techStack,
    };
  }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        {/* Section about me */}
        <section id="about-me-section">
          <div id="about-me-header" className="section-header">
            <h2 className="section-title">/ about me</h2>
          </div>
          <p className="paragraph">
            My name's {this.state.firstname} {this.state.lastname},{" "}
            {this.state.getCurrentAge()}. I'm currently working on my theses for
            my degree in Computer Systems Engineering at Universidad Técnica de
            Manabí of Portoviejo - Ecuador, while growing my career as a
            software engineer in web development.
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
            <TechsList techStack={this.state.techStack} />
          </div>
        </section>
      </>
    );
  }
}
