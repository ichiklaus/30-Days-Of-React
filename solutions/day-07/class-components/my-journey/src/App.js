import React from 'react';
import './App.css';
import './styles/Breakouts.css';
import './styles/Variables.css';
import './styles/Theme.css'
// import 'normalize.css';
import { welcomeSection, myInfo } from './services/common/common';
import actions from './services/utils/index';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
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

