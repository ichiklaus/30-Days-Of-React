import React from 'react';
import { myInfo } from './utils/MyInfo';
import actions from './utils/Actions';
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

