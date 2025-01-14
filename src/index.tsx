import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Import global styles
import App from './App'; // Main React app component

// Mount the React app to the "root" div in index.html
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);