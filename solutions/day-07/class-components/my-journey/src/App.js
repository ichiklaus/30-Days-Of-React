import React from 'react';

import './App.css';
import './styles/Breakouts.css';
import './styles/Variables.css';
import './styles/Theme.css'
// import 'normalize.css';
import { welcomeSection, myInfo } from './services/common/common'
import actions from './services/utils/index';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import ActionButton from './components/ActionButton';

class App extends React.Component {
  state = {
    techStack: myInfo.techStack,
    loggedIn: false,
  }

  ActionButton = ({ text, actions }) => {
    return (
      <button className={
        text === `Subscribe`
          ? `button button--submit`
          : `button button--submit margin`
      } onClick={actions}>{text}</button>
    );
  }

  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
    console.log("🚀 ~ file: App.js ~ line 22 ~ App ~ this.state.loggedIn", this.state.loggedIn);
  };

  Status = () => {
    // if (this.state.loggedIn) {
    //   return <h3 className='welcome-message'>Welcome to my 30 days of React journey</h3>
    // } else {
    //   return <h3 className='welcome-message'>Please, log in to continue</h3>
    // }
    return (this.state.loggedIn)
      ? <h3 className='welcome-message'>Welcome to my 30 days of React journey</h3>
      : <h3 className='welcome-message'>Please, log in to continue</h3>
  }

  GettingStarted = () => {
    return (
      <p>
        Please login to access more information about 30 Days Of React
        challenge
      </p>
    );
  }

  Prerrequistes = () => {
    return (
      <p>You have all the prerequisite courses to get started React</p>
    );
  }

  render() {
    let loggedInText = this.state.loggedIn ? 'Logout' : 'Login';
    console.log("🚀 ~ file: App.js ~ line 36 ~ App ~ loggedInText", loggedInText);
    console.log("🚀 ~ file: App.js ~ line 81 ~ App ~ render ~ this.state.techStack.length", this.state.techStack.length)

    return (
      <div className="App">
        <div className="login-wrapper">
          <this.ActionButton
            text={loggedInText}
            actions={this.handleLogin}
          />
          {/* Conditional Rendering using &&  */}
          {!this.state.loggedIn && ( // Checks the login status, if it's not logged in, it displays Please login text from GettingStarted Component
            <this.GettingStarted />
          )}
          {/* <this.Status /> */}
          {this.state.techStack.length >= 3 && (
            <this.Prerrequistes />
          )}
        </div>
        <Header
          welcomeSection={welcomeSection}
          myInfo={myInfo}
        />
        <Main
          myInfo={myInfo}
          actions={actions}
        />
        <Footer
          myInfo={myInfo}
        />
      </div>
    );
  }
}

export default App;
