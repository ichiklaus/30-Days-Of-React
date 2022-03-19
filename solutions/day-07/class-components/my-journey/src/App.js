import './App.css';
import './styles/Mobile.css';
import './styles/Variables.css';
import { welcomeSection, myInfo } from './services/common/common'
import  actions from './services/utils/index';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
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

export default App;
