import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FirebaseContext} from './stores/FirebaseContext';
import firebase from './Firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebase}}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </FirebaseContext.Provider>
  
);


reportWebVitals();
