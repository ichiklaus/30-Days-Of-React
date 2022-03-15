import React from "react";
import SubscribeButton from "./SubscribeButton";
import HexaColor from "./HexaColor";
import ActionButton from "./ActionButton";

// Maps and formats the tech stack into list items
let getTechsFormatted = (arr) => {
  return arr.map((item) => {
    return <li key={item}>{item}</li>;
  });
};

// For action buttons
const actions = {
  subscribe: {
    text: "Subscribe",
  },
  hiButton: {
    sayHi: function () {
      alert("Hi there! Welcome to my journal.");
    },
    text: "Say hi",
  },
  datetimeButton: {
    showTime: function () {
      alert(new Date());
    },
    text: "Show datetime",
  },
};

let Main = ({
  myInfo: {
    author: { firstname, lastname },
    getCurrentAge,
    techStack,
  },
}) => {
  /** Destructuring props in a const for main component */
  // const {
  //   author: { firstname, lastname },
  //   getCurrentAge,
  //   techStack,
  // } = mainProps.myInfo;

  return (
    <main>
      {/* Section about me */}
      <section className="about-me-section">
        <div className="about-me-header">
          <h2>/ about me</h2>
        </div>
        <p className="intro-description">
          My name's {firstname} {lastname}, {getCurrentAge()}. I'm currently
          working on my theses for my degree in Computer Systems Engineering at
          Universidad Técnica de Manabí of Portoviejo - Ecuador, while growing
          my career as a software engineer in web development.
        </p>
        <p className="intro-description">
          At some point I would like to design and develop videogames ever since
          I caught interest while experimenting with the Unity Game Engine.
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
        <ul className="tech-stack">{getTechsFormatted(techStack)}</ul>
      </section>
      <section className="contact-me-section intro-description">
        <div className="contact-box">
          {/* <label className="fn-input" htmlFor="email">Contact me </label> */}
          <input type="text" id="email" placeholder="mail@example.com"></input>
          {/* {SubscribeButton()} */}
          <SubscribeButton text={actions.subscribe.text} />
        </div>
        <div>
          {/* {HexaColor()} */}
          <HexaColor />
        </div>
        <div className="action-center">
          <div>
            <ActionButton
              action={actions.hiButton.sayHi}
              text={actions.hiButton.text}
            />
          </div>
          <div>
            <ActionButton
              action={actions.datetimeButton.showTime}
              text={actions.datetimeButton.text}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
