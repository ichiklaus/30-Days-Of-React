import React, { Component } from "react";
import intro from "../styles/modules/Intro.module.css";
import MeJpg from "./MeJpg";

const { title, second_title } = intro;

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.myInfo.author.username,
      countryBasedIn: this.props.myInfo.countryBasedin,
    };
  }
  _isMounted = false;

  // componentDidMount() {
  //   this._isMounted = true;
  // }
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }
  render() {
    return (
      <main className="main-wrapper">
        <div className="paragraph">
          <MeJpg />
          <h1 className={`${title} intro-title`}>
            {/* Using destructured object to set inner HTML */}
            Hallo! it's{" "}
            <span className="accent-nickname">{this.state.username}.</span>
          </h1>
          {/* Using states to set inner Html */}
          <h2 className={second_title}>{this.state.welcometext}</h2>
          <p>
            {/* Using destructured object to set inner HTML */}
            I'm a computer systems engineer based in {this.state.countryBasedIn}
            , passionate and fully interested software engineering, web
            development, and UX.
          </p>
        </div>
      </main>
    );
  }
}
