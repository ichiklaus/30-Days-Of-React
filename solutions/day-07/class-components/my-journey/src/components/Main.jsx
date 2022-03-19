import React from "react";
import TechsList from "./TechsList";
import ActionButton from "./ActionButton";
import Aritmethic from "./Aritmethic";

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

    const { subscribe, hiButton, datetimeButton } = this.props.actions;

    return (
      <div className="main-wrapper">
        <main>
          {/* Section about me */}
          <section id="about-me-section">
            <div id="about-me-header" className="section-title">
              <h2>/ about me</h2>
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
              <input type="text" id="email" placeholder="mail@example.com" />
              <ActionButton text={subscribe.text} />
            </div>
          </section>
          <section id="topics-section">
            <div id="topics-header" className="section-title">
              <h2>/ my 30 days of React journey</h2>
            </div>
            <h3>## Day-01</h3>
            <p className="paragraph">
              On day 01 I revised all the basic concepts in javascript, mainly
              those I still struggle with: functional programming and object
              manipulation. I solved problems with arrays, conditionals, objects
              in 3 levels of difficulty. It took me a few days to review the
              Day-01.
            </p>
            <h3>## Day-02</h3>
            <p className="paragraph">
              On day 02 I learnt to use the react library using CDN. In this
              exercise I created a simple website with a header, main, and
              footer section. This code was later migrated using the
              create-react-app with npx (npm).
            </p>
            <h3>## Day-03</h3>
            <p className="paragraph">
              On day 03 I migrated the code from the CDN app into the
              ReactApp/intro-to-react-app (webapp name: My journey with React)
              using create-react-app. I also solved 3 level exercises which
              consisted in solving general questions about React, creating a
              simple subscribe form, and creating a component card.
            </p>
            <h3>## Day-04</h3>
            <p className="paragraph">
              On day 04 I learnt about functional components and worked on the
              ReactApp/intro-to-react-app (webapp name: My journey with React)
              by creating individual JSX child components that are rendered by
              the index.js file. I also worked on the CSS file.
            </p>
            <h3>## Day-05</h3>
            <p className="paragraph">
              On day 05 I learnt about Props in functional components and worked
              on the ReactApp/intro-to-react-app (webapp name: My journey with
              React) adding Props to every component and passing strings, bools,
              numbers, and composed objects. I learnt 3 ways to destructure
              Props: by destructuring in single variables, by destructuring in
              one line, and by destructuring as a parameter. I also created
              additional components such as CTA buttons and fixed the layout for
              mobile. As a plus to catch up on exercises from day 04 and day 05
              I refactored the code creating individual components, a common.js
              file that includes miscellaneous and other utils/variables, and
              using props in functional components, for the level2 and level3
              problems.
            </p>
            <h3>## Day-06</h3>
            <p className="paragraph">
              On day 06 I learnt about mapping arrays and manipulate them when
              destructuring props. I struggled with this part of the challenge,
              arrays are my weak spot and I still find it difficult to visualize
              them when writing code. In retrospect I can summarize that: to map
              a one dimensional array it's done by passing the reference of the
              component props and destructuring while creating html elements to
              contain each element in the array.
            </p>
            <code className="code-block">
              {`const mappedArray = arrayToMap.map( element => ( <tag>{element}</tag> ));
return (<div>mappedArray</div>);`}
            </code>
            <p className="paragraph">
              <span>
                Note: mappedArray is the destructured Object Prop{" "}
                <span>
                  <code>{`(Component({ mappedArray })`}</code>
                </span>{" "}
                Where
                <span>
                  <code>arrayToMap</code>
                </span>{" "}
                is the component.
              </span>
            </p>
            <p className="paragraph">
              To map an array of arrays it's done by creating a component for
              the array variable, like:
            </p>
            <code className="code-block">
              {`const mappedArray = arrayToMap.map( element => ( </ChildComponent element={element}>));
return (<div>mappedArray<div>);`}
            </code>
            <p className="paragraph">
              Then we render the created Child Component (ChildComponent) as
              follows:
            </p>
            <code>{`ChildComponent({ mappedArray: [ key(m), key(n) ] })`}</code>
            <p className="paragraph">And lastly, we return the component:</p>
            <code>{`return (<p>{m}</p> <p>{n}</p>);`}</code>
            <p className="paragraph">
              <span>
                This is useful to render lists especially, so instead of using{" "}
                <code>{`<p></p>`}</code> return <code>{`<li></li>`}</code> in
                the Child Component and return <code>{`<ul></ul>`}</code> in the
                parent component.
              </span>
            </p>
            <p className="paragraph">
              <span>
                The same principle can be applied to an array of objects, just
                dont forget that when passing the props in the child component
                it is:{" "}
                <code>{`({ mappedArray: { key(1), key(2), key(3)... key(n) }})`}</code>
              </span>
            </p>
            <h3>## Day-07</h3>
            <p className="paragraph">
              On day 07 I learnt about class-based components; though there're
              functional components since React v16.8.0, it's still good to
              learn about these in order to maintain legacy code or to update
              such code. In this section I just converted my functional-based
              components to class-based components while also learning to use
              Props from the constructor, and a bit about states
            </p>
            <h3>## Day-08</h3>
            <p className="paragraph">
              On day 08 I learnt about states, which means the state of a
              component under a condition. Here are some components that change
              their states:
            </p>
            <div id="stateful-components" className="action-center margin">
              <h2>Class-based CTA buttons components with props arguments</h2>
              <div>
                <ActionButton actions={hiButton.sayHi} text={hiButton.text} />
              </div>
              <div>
                <ActionButton
                  actions={datetimeButton.showTime}
                  text={datetimeButton.text}
                />
              </div>
              <Aritmethic />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
