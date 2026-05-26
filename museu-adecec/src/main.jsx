import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

/*
  Point d'entrée principal de l'application.
  On importe global.css ici pour que les variables CSS et styles communs
  soient disponibles sur toutes les pages sans duplication.
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);