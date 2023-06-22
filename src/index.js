import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FilmProvider from './components/hooks/useContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FilmProvider>
      <BrowserRouter basename='/goit-react-hw-05-movies'>
        <App />
      </BrowserRouter>
    </FilmProvider>
  </React.StrictMode>
);
