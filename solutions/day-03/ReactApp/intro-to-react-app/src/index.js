import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css';
import './styles/index.css';
import './styles/App.css';
import './styles/Mobile.css';
import './styles/Variables.css';


// Root element to be rendered
const rootElement = document.getElementById('root');
// Render the page
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement);