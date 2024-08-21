import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import BrowseRoot from './loginForm/MainRoot';
import './index.css';


const root =
  ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BrowseRoot />
    </BrowserRouter>
  </React.StrictMode>
);