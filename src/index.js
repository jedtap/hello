import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/devicon/devicon.min.css'
import '../node_modules/devicon/devicon-base.css'
import '../node_modules/devicon/devicon.json'
import '../node_modules/devicon/icomoon.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
