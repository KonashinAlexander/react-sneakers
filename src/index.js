import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'macro-css';
import { ErrorBoundary } from "react-error-boundary";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 

  <React.StrictMode>
    <ErrorBoundary fallback={<div>Что-то пошло не так! Перезагрузите страницу!</div>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
  
);


