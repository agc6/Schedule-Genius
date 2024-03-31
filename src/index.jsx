import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assets/css/app.css";
import "./assets/css/bootstrap-grid.min.css.map";

import "./assets/icons/boxicons-2/css/boxicons.min.css";
// Use createRoot API for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);