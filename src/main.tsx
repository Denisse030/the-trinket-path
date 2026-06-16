import "@fontsource/clicker-script/400.css";
import "@fontsource/jersey-25/400.css";
import "@fontsource/alice/400.css";
import "leaflet/dist/leaflet.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);