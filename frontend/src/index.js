import React from 'react';
import ReactDOM from 'react-dom/client'; // Usando 'react-dom/client' para React 18
import App from './App';

// Criando o root e renderizando o componente
const root = ReactDOM.createRoot(document.getElementById('root')); // Criando o root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
