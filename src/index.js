import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Import your CSS file
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

