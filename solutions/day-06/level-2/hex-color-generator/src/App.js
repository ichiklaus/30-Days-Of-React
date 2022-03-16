import './App.css';
import hexMatrix from './services/common';
import Matrix from './components/Matrix';
import './styles/matrix.css'

function App() {
  return (
    <div className="App">
      <h1>30 Days of React</h1>
      <h2>Hexadecimal Colours</h2>
        <Matrix hexColors={hexMatrix}/>
    </div>
  );
}

export default App;
