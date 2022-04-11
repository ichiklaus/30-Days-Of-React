import React from 'react';
import './styles/css/Utils.css'
import './styles/App.css';
import './styles/Breakouts.css';
import './styles/Variables.css';
import './styles/Theme.css'
import 'normalize.css';
// import "bootstrap/dist/css/bootstrap.css";

import { welcomeSection, myInfo } from './utils/MyInfo';
import actions from './utils/Actions';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

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

