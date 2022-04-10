import React from "react";
import Aritmethic from "./Aritmethic";
import Pet from "./Pet";
import ActionButton from "./ActionButton";
import Events from "./Events";
import OnMouseEnter from "./OnMouseEnter";
import Form from "./Form";
import FormPP from "./FormPP";
import Countries from "./Countries";

class Journal extends React.Component {
  render() {
    const { hiButton, datetimeButton } = this.props;
    return (
      <div>
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
        <div
          id="stateful-components"
          className="action-center margin paragraph"
        >
          <h3>Class-based CTA buttons components with props arguments</h3>
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
        {/* <h4>Conditional rendering</h4> */}
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
        <h4>Exercise solution for day 11: Random position on mouse enters</h4>
        <OnMouseEnter />
        <h3>## Day-12</h3>
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
        
      </div>
    );
  }
}

export default Journal;
