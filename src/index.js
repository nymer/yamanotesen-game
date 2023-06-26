import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
      <script src="http://localhost:8097"></script>
      <script src="http://192.168.10.102:8097"></script>
    </head>
    <App />
  </React.StrictMode>
);

reportWebVitals();
