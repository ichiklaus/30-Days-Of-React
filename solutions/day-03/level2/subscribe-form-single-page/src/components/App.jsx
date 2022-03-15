import Form from './Form';
import '../styles/App.css';

// subscribe form
let SubscribeForm = () => {
const headerOne = "subscribe";
  return (
    <main>
      <div className="subscribe__header">
        <h1>{headerOne.toUpperCase()}</h1>
        <p>Sing up with your email address to recieve news and updates</p>
      </div>
        <Form />
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
