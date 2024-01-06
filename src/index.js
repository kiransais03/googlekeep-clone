import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GooglekeepProvider from './context/GooglekeepProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GooglekeepProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </GooglekeepProvider>
  </React.StrictMode>
);