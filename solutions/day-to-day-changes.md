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
Here are some components that change their states: