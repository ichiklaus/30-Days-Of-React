import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import "./styles/Theme.css";
import "./styles/Variables.css";
import "./styles/Breakouts.css";

// import App from './App';
// import App from './mocks/SnippetApp';
import {RouterApp}  from "./mocks/RouterIndex";
import reportWebVitals from './reportWebVitals';


import "@fontsource/ntr";

// const NewButton = buttonWithStyle(Button);
let root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Button 
    text={"No styles"}
    />
    <NewButton
    text={"With Style"}
    /> */}
    <RouterApp />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

