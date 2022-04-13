# General info

This is a journal to keep track exercise-solutions and changes made to ReactApp/intro-to-react-app (webapp name: My journey with React).

## Day 01

On day 01 I revised all the basic concepts in javascript, mainly those I still struggle with: functional programming and object manipulation.
I solved problems with arrays, conditionals, objects in 3 levels of difficulty.
It took me a few days to review the Day-01.

## Day 02

On day 02 I learnt to use the react library using CDN. In this exercise I created a simple website with a header, main, and footer section. This code was later migrated using the create-react-app with npx (npm).

## Day 03

On day 03 I migrated the code from the CDN app into the ReactApp/intro-to-react-app (webapp name: My journey with React) using create-react-app. I also solved 3 level exercises which consisted in solving general questions about React, creating a simple subscribe form, and creating a component card.

## Day 04

On day 04 I learnt about functional components and worked on the ReactApp/intro-to-react-app (webapp name: My journey with React) by creating individual JSX child components that are rendered by the index.js file.
I also worked on the CSS file.

## Day 05

On day 05 I learnt about Props in functional components and worked on the ReactApp/intro-to-react-app (webapp name: My journey with React) adding Props to every component and passing strings, bools, numbers, and composed objects. I learnt 3 ways to destructure Props: by destructuring in single variables, by destructuring in one line, and by destructuring as a parameter.
I also created additional components such as CTA buttons and fixed the layout for mobile.
As a plus to catch up on exercises from day 04 and day 05 I refactored the code creating individual components, a common.js file that includes miscellaneous and other utils/variables, and using props in functional components, for the level2 and level3 problems.

## Day 06

On day 06 I learnt about mapping arrays and manipulate them when destructuring props. I struggled with this part of the challenge, arrays are my weak spot and I still find it difficult to visualize them when writing code. In retrospect I can summarize that: to map a one dimensional array it's done by passing the reference of the component props and destructuring while creating html elements to contain each element in the array

> `const mappedArray = arrayToMap.map( element => ( <tag>{element}</tag> ));` <br> > `return (<div>mappedArray\</div>)` <br>
- Note: `mappedArray` is the destructured Prop (`Component( { mappedArray } )`)

- where **arrayToMap** is the component. <br>
- To map an array of arrays it's done by creating a component for the array variable, like:
  > This is the parent component, where mappedArray is the destructured Prop: <br> > `const mappedArray = arrayToMap.map( element => ( </ChildComponent element={element}> ));` `return (<div>mappedArray<div>);`
- then we render the created Child Component (`ChildComponent`) as follows: <br>
  `ChildComponent({ mappedArray: [ key(m), key(n) ] })`
- and then we return the component: <br>
`return (<p>{m}</p> <p>{n}</p>);`

This is useful to render lists especially, so instead of using `<p></p>` return `<li></li>` in the Child Component and return` <ul></ul>` in the parent component.

The same principle can be applied to an array of objects, just dont forget that when passing the props in the child component it is: `( { mappedArray: { key(1), key(2), key(3)... key(n) } } )`

## Day 07
On day 07 I learnt about class-based components; though there're functional components since React v16.8.0, it's still good to learn about these in order to maintain legacy code or to update such code. In this section I just converted my functional-based components to class-based components while also learning to use Props from the constructor, and a bit about states.

## Day 08
On day 08 I learnt about states, which means the state of a component under a condition.
Using states I created a theme toggler between light and dark mode. I tried implementing it using matchmedia to match the prefered theme and use toggle from classList but I couldn't get the status to update correctly in order to update the FAS Icon, so the approach I took was to return a themeSatus to add and remove classes depending on the theme current status.

## Day 09
On day 09 it was about conditionally rendering React components. I created a Login/Logout text-based state which displays the correct message wether the user logs in or out of the application. Similarly, I created a show datetime button off the alert() function button created on previous days.

## Day 10
On day 10 it was about learning to structure the project; theres not one way to do so, so I base it off the structure by https://www.devaradise.com  and by https://www.xenonstack.com/insights/reactjs-project-structure. 
On this day I could learn about fragments which are a react component which is useful when rendering a child component and it avoids creating another DOM parent node (like you know you have to wrap multiple elements in a div) so with <Fragment></Fragment> or simply <></>, you can wrap those child elements from a <ul></ul> or a <td></td>.

## Day 11
On day 11 I look into event handlers; since there is a vast diversity of JS events I only practiced with some of the most commonly used. Using states I could log the changes ocurring when an event happens.

## Day 12
Day 12 was about form validation. I reviewd HTML forms and learnt about some of the JS events to manipulate the DOM. It took me a couple of days to practice with forms.

## Day 13
Day 13 was about controlled vs uncontrolled forms. I kinda grasped the concept of uncontrolled forms and the use of refs using createRef() in
class-based components, though it is not advised to use refs to manipulate data (as I understood); it's just useful when working on
animations, or anything not data-related.

## Day 14
On day 14 I'm learning about component lifecycles. So far I understand their order of render, and that getDerivedStateFromProps is "used to alter the state of this.state with properties from props" so, we pass props from the parent component into the child component and it is then rendered through getDerivedState; componentDidMount on the other hand, updates the component: the method is called after the component is rendered through render().
I did an simple API fetching that displays basic info about countries (limited to 5 results).

## Day 15
On day 15 I reviewed 3rd party libraries, especifically: SCSS, CSS modules, where I modified bits of my styling code to try out both. Previously in this journal, and in a FEM challenge I used bootstrap and react-bootstrap.

## Day 16
This was about High Order Components. I reviewed about both functinal HOC and class-based HOC. There is a mockup exercise I took from the challenge and wrote it after reviewing the code which can be viewed in My Journey project.

## Day 17
Between 11 and 12 of april I reviewed the basics of React Routing. I used the version 6 even though the curriculum uses version 5. Differences I could notice so far between the versions are that Switches in v5 renames to Routes in v6; component and render properties are replaced by element in order to render components. I learned the difference between Link and NavLink which is that in the former, Link doesn't allow styling, whereas in NavLink I'm able to use styles and className. Also, in v5 it was named activeClassName and activeStyle. I implemented routing in a navbar that's on top of the page. In the coming days I'm gonna reestructure the project and create routes for the login, journal, and home sections.