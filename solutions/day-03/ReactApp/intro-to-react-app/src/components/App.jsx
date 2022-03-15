import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {welcomeSection, myInfo} from '../services/common/index';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header
          welcomeSection={welcomeSection}
          myInfo={myInfo}
        />
        <Main
          myInfo={myInfo}
        />
      </div>
      <Footer 
        myInfo={myInfo}
      />
    </div>
  );
}
export default App;