import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
// import App from './mocks/SnippetApp';
import reportWebVitals from './reportWebVitals';
import "@fontsource/ntr";



// const NewButton = buttonWithStyle(Button);

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Button 
    text={"No styles"}
    />
    <NewButton
    text={"With Style"}
    /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

