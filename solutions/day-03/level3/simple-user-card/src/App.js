import './App.css';
import 'normalize.css'
import nicolasjpeg from './images/nicolas.jpeg'

let Header = () => {
  return(
    <header>
      <div className="profile">
        <img className='profile-photo' src={nicolasjpeg} alt=''/>
        <h1 className='profile-title'>Nicolás Moreira</h1>
        <p>Junior Developer | Ecuador | @ichiklaus</p>
      </div>
    </header>
  );
}

let Main = () => {
  const techStack = ['HTML5', 'CSS3', 'Sass/SCSS', 'JS', 'React', 'Node.js', 'Git'];
  function asList(input) {
    return input.map(item => 
      <div className='skills__stack-box'>
        <li key={item}>{item}</li>
      </div>
    );
  }
  return(
    <main>
      <div className='skills'>
        <p>Technical Skills</p>
        <ul className='skills__stack'>
          {asList(techStack)}
        </ul>
      </div>
    </main>
  );
}

let Footer = () => {
  return(
    <footer>
      <p>Joined on February 27, 2022</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">     
        {Header()}
        {Main()}
        {Footer()}
    </div>
  );
}

export default App;
