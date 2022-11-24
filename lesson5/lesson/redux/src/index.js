import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lesson from './Lesson';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Lesson />
  </React.StrictMode>
);
