import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { myInfo } from "../services/common/index";

function App() {
  return (
    <div className="App">
      <Header 
        myInfo={myInfo}
      />
      <Main 
        myInfo={myInfo}
      />
      <Footer />
    </div>
  );
}

export default App;
