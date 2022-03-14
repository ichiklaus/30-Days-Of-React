import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css'

// Root element to be rendered
 const rootElement = document.getElementById('root');
 // Render the page
 ReactDOM.render(
     <React.StrictMode>
         <App />
     </React.StrictMode>,
    rootElement);