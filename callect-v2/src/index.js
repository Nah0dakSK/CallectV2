import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sidebar from './comp/sidebar/sideBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>
);