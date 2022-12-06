import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

axios.defaults.baseURL = 'https://dw05-11914-lnm5nd2pia-uc.a.run.app/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
