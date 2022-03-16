import './App.css';
import Numbers from './components/Numbers';
import Skills from './components/Skills';
import CountryContainer from './components/ArrayOfObjects/CountryContainer';
import { numbersArr, skillStack, countries } from './services/misc/index';

function App() {
  return (
    <div className="App">
      <Numbers
        numbers={numbersArr}
      />
      <Skills skillStack={skillStack} />
      <CountryContainer countries={countries} />
    </div>
  );
}
export default App;