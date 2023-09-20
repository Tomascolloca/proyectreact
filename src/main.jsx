import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Corrección en la importación de Bootstrap
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

