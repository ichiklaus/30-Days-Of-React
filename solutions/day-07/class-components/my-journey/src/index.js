import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/ntr";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react'
// import ReactDOM from 'react-dom'

// // A button component
// const Button = ({ text, onClick, style }) => (
//   <button style={style} onClick={onClick}>
//     {text}
//   </button>
// )

// // CSS styles in JavaScript Object
// const buttonStyles = {
//   backgroundColor: '#61dbfb',
//   padding: 10,
//   border: 'none',
//   borderRadius: 5,
//   margin: '3px auto',
//   cursor: 'pointer',
//   fontSize: 22,
//   color: 'white',
// }

// // class based component
// class Header extends React.Component {
//   render() {
//     const {
//       welcome,
//       title,
//       subtitle,
//       author: { firstName, lastName },
//       date,
//     } = this.props.data

//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>{welcome}</h1>
//           <h2>{title}</h2>
//           <h3>{subtitle}</h3>
//           <p>
//             {firstName} {lastName}
//           </p>
//           <small>{date}</small>
//         </div>
//       </header>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     loggedIn: false,
//   }
//   handleLogin = () => {
//     this.setState({
//       loggedIn: !this.state.loggedIn,
//     })
//     console.log("🚀 ~ file: index.js ~ line 77 ~ App ~ loggedIn", this.state.loggedIn);
    
//   }

//   render() {
//     const data = {
//       welcome: '30 Days Of React',
//       title: 'Getting Started React',
//       subtitle: 'JavaScript Library',
//       author: {
//         firstName: 'Asabeneh',
//         lastName: 'Yetayeh',
//       },
//       date: 'Oct 9, 2020',
//     }

//     let status = this.state.loggedIn ? (
//       <h1>Welcome to 30 Days Of React</h1>
//     ) : (
//       <h3>Please Login</h3>
//     )

//     return (
//       <div className='app'>
//         <Header data={data} />
//         {status}
//         <Button
//           text={this.state.loggedIn ? 'Logout' : 'Login'}
//           style={buttonStyles}
//           onClick={this.handleLogin}
//         />
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)