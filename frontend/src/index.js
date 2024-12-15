import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importando a nova versão de ReactDOM no React 18
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria o root
root.render( // Renderiza o componente dentro do root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
