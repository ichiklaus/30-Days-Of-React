import './App.css';
import 'normalize.css'

// subscribe form
let SubscribeForm = () => {
const headerOne = "subscribe";
  return (
    <main>
      <div className="subscribe__header">
        <h1>{headerOne.toUpperCase()}</h1>
        <p>Sing up with your email address to recieve news and updates</p>
      </div>
      <div className='subscribe__inputs'>
        <input type='text' placeholder='First name'></input>  
        <input type='text' placeholder='Last name'></input>  
        <input type='text' placeholder='Email'></input>  
      </div>
      <div className='subscribe__cta'>
        <button className='subscribe__cta-black' type='submit'>Subscribe</button>  
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <SubscribeForm />
    </div>
  );
}

export default App;
