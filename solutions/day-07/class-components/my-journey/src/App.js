import './App.css';
import './styles/Mobile.css';
import './styles/Variables.css';
import { welcomeSection, myInfo } from './services/common/common'
import  actions from './services/utils/index';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Header
        welcomeSection={welcomeSection}
        myInfo={myInfo}
      />
      <Main 
        myInfo={myInfo}
        // actions={actions}
      />
    </div>
  );
}

export default App;
