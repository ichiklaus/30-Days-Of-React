import './App.css';
import '@csstools/normalize.css';
import matrixGenerated from "./services/common";
import Matrix from './components/Matrix';


function App() {
  return (
    <div className="App">
      <h1>30 Days of React</h1>
      <h2>Number Generator</h2>
      <Matrix
        matrix={matrixGenerated}
      />
    </div>
  );
}

export default App;
