import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from "./LanguageContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </React.StrictMode>
  </LanguageProvider>
);
