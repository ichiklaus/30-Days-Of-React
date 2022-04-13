import React from 'react';
import './styles/css/Utils.css'
import './styles/App.css';
import './styles/Breakouts.css';
import './styles/Variables.css';
import './styles/Theme.css'
import 'normalize.css';
// import "bootstrap/dist/css/bootstrap.css";

import { myInfo } from './utils/MyInfo';
import actions from './utils/Actions';
// import Header from './layouts/Header';
import Main from './layouts/Main';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <Main
          myInfo={myInfo}
          actions={actions}
        />

      </div>
    );
  }
}


export default App;

