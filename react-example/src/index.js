import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import enHome from './locales/en/home.json';
import esHome from './locales/es/home.json';
import enRoutes from './locales/en/routes.json';
import esRoutes from './locales/es/routes.json';
import enHello from './locales/en/hello.json';
import esHello from './locales/es/hello.json';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      routes: enRoutes,
      home: enHome,
      hello: enHello,
    },
    es: {
      routes: esRoutes,
      home: esHome,
      hello: esHello,
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
