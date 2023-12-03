import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import('../mocks/browser')
  .then(({ worker }) => {
    // Start the worker.
    worker.start();
  })
  .then(() => {
    // Render the application.
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
