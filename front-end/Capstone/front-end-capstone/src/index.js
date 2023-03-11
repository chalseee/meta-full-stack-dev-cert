import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormProvider from './store/FormStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);

