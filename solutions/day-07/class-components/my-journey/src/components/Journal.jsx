import React from "react";
import { Link, Outlet } from "react-router-dom";

import Aritmethic from "./Aritmethic";
import Pet from "./Pet";
import ActionButton from "./ActionButton";
import Events from "./Events";
import OnMouseEnter from "./OnMouseEnter";
import Form from "./Form";
import FormPP from "./FormPP";
import Countries from "./Countries";
import FetchedCountry from "./FetchWithHooks";
import {
  ReactButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  DefaultButton,
} from "../utils/HOCButtonImports";
// import CountryFetch from "../api/services/CountryFetch";
import DisplayCountry from "./DisplayCountry";
import UseRef from "./UseRef";

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiButton: this.props.hiButton,
      datetimeButton: this.props.datetimeButton,
    };
  }
  render() {
    return (
      <main className="main-wrapper">
        <div id="topics-header" className="section-header">
          <h2 className="section-title">/ my 30 days of React journey</h2>
        </div>
        <h3>## Day-01</h3>
        <p className="paragraph">
          On day 01 I revised all the basic concepts in javascript, mainly those
          I still struggle with: functional programming and object manipulation.
          I solved problems with arrays, conditionals, objects in 3 levels of
          difficulty. It took me a few days to review the Day-01.
        </p>
        <h3>## Day-02</h3>
        <p className="paragraph">
          On day 02 I learnt to use the react library using CDN. In this
          exercise I created a simple website with a header, main, and footer
          section. This code was later migrated using the create-react-app with
          npx (npm).
        </p>
        <h3>## Day-03</h3>
        <p className="paragraph">
          On day 03 I migrated the code from the CDN app into the
          ReactApp/intro-to-react-app (webapp name: My journey with React) using
          create-react-app. I also solved 3 level exercises which consisted in
          solving general questions about React, creating a simple subscribe
          form, and creating a component card.
        </p>
        <h3>## Day-04</h3>
        <p className="paragraph">
          On day 04 I learnt about functional components and worked on the
          ReactApp/intro-to-react-app (webapp name: My journey with React) by
          creating individual JSX child components that are rendered by the
          index.js file. I also worked on the CSS file.
        </p>
        <h3>## Day-05</h3>
        <p className="paragraph">
          On day 05 I learnt about Props in functional components and worked on
          the ReactApp/intro-to-react-app (webapp name: My journey with React)
          adding Props to every component and passing strings, bools, numbers,
          and composed objects. I learnt 3 ways to destructure Props: by
          destructuring in single variables, by destructuring in one line, and
          by destructuring as a parameter. I also created additional components
          such as CTA buttons and fixed the layout for mobile. As a plus to
          catch up on exercises from day 04 and day 05 I refactored the code
          creating individual components, a common.js file that includes
          miscellaneous and other utils/variables, and using props in functional
          components, for the level2 and level3 problems.
        </p>
        <h3>## Day-06</h3>
        <p className="paragraph">
          On day 06 I learnt about mapping arrays and manipulate them when
          destructuring props. I struggled with this part of the challenge,
          arrays are my weak spot and I still find it difficult to visualize
          them when writing code. In retrospect I can summarize that: to map a
          one dimensional array it's done by passing the reference of the
          component props and destructuring while creating html elements to
          contain each element in the array.
        </p>
        <code className="code-block fs-sm">
          {`const mappedArray = arrayToMap.map( element => ( <tag>{element}</tag> ));
return (<div>mappedArray</div>);`}
        </code>
        <p className="paragraph">
          <span>
            Note: mappedArray is the destructured Object Prop{" "}
            <span>
              <code className="fs-sm">{`(Component({ mappedArray })`}</code>
            </span>{" "}
            Where
            <span>
              <code className="fs-sm">arrayToMap</code>
            </span>{" "}
            is the component.
          </span>
        </p>
        <p className="paragraph">
          To map an array of arrays it's done by creating a component for the
          array variable, like:
        </p>
        <code className="code-block fs-sm">
          {`const mappedArray = arrayToMap.map( element => ( </ChildComponent element={element}>));
return (<div>mappedArray<div>);`}
        </code>
        <p className="paragraph">
          <span>
            Then we render the created Child Component (ChildComponent) as
            follows:{" "}
            <code className="fs-sm">{`ChildComponent({ mappedArray: [ key(m), key(n) ] })`}</code>
          </span>
        </p>
        <p className="paragraph">
          <span>
            And lastly, we return the component:{" "}
            <code className="fs-sm">{`return (<p>{m}</p> <p>{n}</p>);`}</code>
          </span>
        </p>
        <p className="paragraph">
          <span>
            This is useful to render lists especially, so instead of using{" "}
            <code className="fs-sm">{`<p></p>`}</code> return{" "}
            <code className="fs-sm">{`<li></li>`}</code> in the Child Component
            and return <code className="fs-sm">{`<ul></ul>`}</code> in the
            parent component.
          </span>
        </p>
        <p className="paragraph">
          <span>
            The same principle can be applied to an array of objects, just dont
            forget that when passing the props in the child component it is:{" "}
            <code className="fs-sm">{`({ mappedArray: { key(1), key(2), key(3)... key(n) }})`}</code>
          </span>
        </p>
        <h3>## Day-07</h3>
        <p className="paragraph">
          On day 07 I learnt about class-based components; though there're
          functional components since React v16.8.0, it's still good to learn
          about these in order to maintain legacy code or to update such code.
          In this section I just converted my functional-based components to
          class-based components while also learning to use Props from the
          constructor, and a bit about states
        </p>
        <h3>## Day-08</h3>
        <p className="paragraph">
          On day 08 I learnt about states, which means the state of a component
          under a condition. Here are some components that change their states:
        </p>
        <div id="stateful-components" className="action-center mt-4 paragraph">
          <h3>Class-based CTA buttons components with props arguments</h3>
          <div>
            <ActionButton
              actions={this.state.hiButton.sayHi}
              text={this.state.hiButton.text}
            />
          </div>
          <div>
            <ActionButton
              actions={this.state.datetimeButton.showTime}
              text={this.state.datetimeButton.text}
            />
          </div>
          <Aritmethic />
          <Pet />
        </div>
        <h4>Theme toggler</h4>
        <p className="paragraph">
          Using states I created a theme toggler between light and dark mode. I
          tried implementing it using matchmedia to match the prefered theme and
          use toggle from classList but I couldn't get the status to update
          correctly in order to update the FAS Icon, so the approach I took was
          to return a themeSatus to add and remove classes depending on the
          theme current status.
        </p>
        <h3>## Day-09</h3>
        <p className="paragraph">
          On day 09 it was about conditionally rendering React components. I
          created a Login/Logout text-based state which displays the correct
          message wether the user logs in or out of the application. Similarly,
          I created a show datetime button off the {"alert()"} function button
          created on previous days.
        </p>
        <h3>## Day-10</h3>
        <p className="paragraph">
          <span>
            On day 10 it was about learning to structure the project; theres not
            one way to do so, so I base it off the structure by{" "}
            <a href="https://www.devaradise.com/react-project-folder-structure">
              React Project Structure Best Practices for Scalable Application
            </a>{" "}
            and by{" "}
            <a href="https://www.xenonstack.com/insights/reactjs-project-structure">
              Understanding ReactJs Project Structure and Folder Setups
            </a>
            . On this day I could learn about fragments which are a react
            component which is useful when rendering a child component and it
            avoids creating another DOM parent node{" "}
            {"(like you know you have to wrap multiple elements in a div)"} so
            with <code className="fs-sm">{"<Fragment></Fragment>"}</code>
            or simply <code className="fs-sm">{"<></>"}</code>, you can wrap
            those child elements from a{" "}
            <code className="fs-sm">{"<ul></ul>"}</code>
            or a <code className="fs-sm">{"<td></td>"}</code> .
          </span>
        </p>
        <h3>## Day-11</h3>
        <p className="paragraph">
          On day 11 I look into event handlers; since there is a vast diversity
          of JS events I only practiced with some of the most commonly used.
          Using states I could log the changes ocurring when an event happens. I
          did some practice which is shown below:
        </p>
        <Events />
        <h4 className="mt-5">
          Exercise solution for day 11: Random position on mouse enters
        </h4>
        <OnMouseEnter />
        <h3>## Day-12</h3>
        <p className="paragraph">
          Day 12 was about form validation. I reviewd HTML forms and learnt
          about some of the JS events to manipulate the DOM. It took me a couple
          of days to practice with forms.
        </p>
        <Form />
        <FormPP />
        <h3>## Day-13</h3>
        <p className="paragraph">
          Day 13 was about controlled vs uncontrolled forms. I kinda grasped the
          concept of uncontrolled forms and the use of refs using createRef() in
          class-based components, though it is not advised to use refs to
          manipulate data (as I understood); it's just useful when working on
          animations, or anything not data-related.
        </p>
        <p className="paragraph">
          To practice form handling I completed a challenge from Frontend
          Mentor:{" "}
          <a
            href="https://www.frontendmentor.io/solutions/signup-form-with-react-reactbootstrap-bootstrap-parcel-bundler-ByYYDOsQq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Signup Form with React, React-Bootstrap, Bootstrap, bundled with
            Parcel
          </a>{" "}
        </p>
        <h3>## Day-14</h3>
        <p className="paragraph">
          On day 14 I'm learning about component lifecycles. So far I understand
          their order of render, and that getDerivedStateFromProps is{" "}
          <em>
            "used to alter the state of this.state with properties from props"
          </em>{" "}
          so, we pass props from the parent component into the child component
          and it is then rendered through getDerivedState ; componentDidMount on
          the other hand,
          <em>updates</em> the component: the method is called after the
          component is rendered through{" "}
          <span>
            <code className="code-block fs-sm">render();</code>.
          </span>
        </p>
        <h4>API fetching with componentDidMount Cycle</h4>
        <Countries />
        <h4>## Day-15</h4>
        <p className="paragraph">
          On day 15 I reviewed 3rd party libraries, especifically: SCSS, CSS
          modules, where I modified bits of my styling code to try out both.
          Previously in this journal, and in a FEM challenge I used bootstrap
          and react-bootstrap.
        </p>
        <p className="paragraph">
          Goal: Build projects with Material UI, Styled Components, Reactstrap,
          Tailwind, Bulma, and React Icons.
        </p>
        <p className="paragraph">
          Implement: axios for API fetching, and moment for datetime formats.
        </p>
        <h4>## Day-16</h4>
        <p className="paragraph">
          This was about High Order Components. I reviewed about both functinal
          HOC and class-based HOC. Here is a mockup exercise I took from the
          challenge and wrote it after reviewing the code:
        </p>
        <div className="grid-container g50 mt-4">
          <div className="grid-auto-fill space-1">
            {<ReactButton text={"React"} />}
            {<InfoButton text={"Info"} />}
            {<SuccessButton text={"Success"} />}
            {<WarningButton text={"Warning"} />}
            {<DangerButton text={"Danger"} />}
            {<DefaultButton text={"Default"} />}
          </div>
        </div>
        <h4>## Day-17</h4>
        <p className="paragraph">
          Between 11 and 12 of april I reviewed the basics of React Routing. I
          used the version 6 even though the curriculum uses version 5.
          Differences I could notice so far between the versions are that
          Switches in v5 renames to Routes in v6; component and render
          properties are replaced by element in order to render components. I
          learned the difference between Link and NavLink which is that in the
          former, Link doesn't allow styling, whereas in NavLink I'm able to use
          styles and className. Also, in v5 it was named activeClassName and
          activeStyle. I implemented routing in a navbar that's on top of the
          page. In the coming days I'm gonna reestructure the project and create
          routes for the login, journal, and home sections.
        </p>
        <p className="paragraph">
          I reestructured the project and created navigation links using
          react-router-dom. Took me some time to understand the structure using
          nested routes, but in the end I managed to make it work setting the
          RouterIndex.js as the parent component for content, while rendering
          the footer alongide - meaning {"<RouterApp />"} and {"<Footer />"} are
          rendered in index.js
        </p>
        <h4>## Day-18</h4>
        <p className="paragraph">
          Fetching and Axios. On day 18 I worked with API calling using
          fetching() and axios() and how to implementing using async - await or
          promises. To make the code modularized I applied the concept of
          Higher-order Components to since the code for API calling is
          practically similar with both methods. Below, there's an application
          of the two methods.
        </p>
        {/* <CountryFetch /> */}
        {/* Higher-order Component to fetch data with fetch and axios library */}
        <DisplayCountry />
        <h4>## Day-19 & Day-20</h4>
        <p className="paragraph">
          On day 19 focused on building projects applying everything learnt so
          far so I decided to build a github-user search application from
          Frontend Mentor challenge using this time functional components (using
          Hooks), the axios library, and tailwindcss. I've taken in
          consideration that 2 days are dedicated to build 2 different projects,
          so in the run I will be building another project, bigger than the
          Github-user search app. As for now I will keep on learning Hooks.
        </p>
        <h4>## Day-21</h4>
        <p className="paragraph">
          On day 21 I was introduced to Hooks, so far I've learnt to use
          useState() and useEffect(): useEffect() is the equivalent of state and
          setState() (combined) in class components. and useEffect(), as
          mentioned in the docs,{" "}
          <em>
            "is the combination of componentDidMount(), componentDidUpdate(),
            and componentWillUnmount()"
          </em>
          ; useEffect() gives an initial state after the component has been
          rendered while giving the ability to clean up said state using and
          empty array parameter, like: useEffect(method, []).
        </p>
        <h4>## Day-22</h4>
        <p className="paragraph">On day 22 I'm practicing forms with hooks.</p>
        <p className="paragraph">
          {" "}
          <span>
            Click to go to the new section with{" "}
            <Link to="/extra-content">Form with Hooks</Link>{" "}
          </span>{" "}
          <Outlet />
        </p>
        <h4>## Day-23 & Day-25</h4>
        <p className="paragraph">
          On day 23 I'm retaking fetching data with axios and creating Custom
          Hooks:
        </p>
        <FetchedCountry />
        <h4 className="mt-5">## Day-26 & Day-27</h4>
        <p className="paragraph">
          Day 26 focused on context, which in short is about passing data down
          the component tree. Being honest, it's a concept I didn't quite
          understand so I have to read the docs properly and test code.
        </p>
        <p className="paragraph">
          Day 27 was about the useRef Hook. An actual useful hook to manipulate
          the DOM elements, read from them...
        </p>
        <UseRef />
        <h4 className="mt-5">## Day-28, Day-29 & Day-30</h4>
        <p className="paragraph">
          The last 3 days is about reflection and building a CRUD application.
          For now I'm postponing building the CRUD app and will focus on data
          fetching, and review on other concepts such as Redux, unit testing,
          deployment, and CI.
        </p>
      </main>
    );
  }
}

export default Journal;
