import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GooglekeepProvider from './context/GooglekeepProvider';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GooglekeepProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </GooglekeepProvider>
    </Provider>
  </React.StrictMode>
);