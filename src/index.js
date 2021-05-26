import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './bootstrap/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { config } from './config/firebase';
import { firebase } from "@firebase/app";
import "@firebase/auth";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <FirebaseAuthProvider {...config} firebase = {firebase}>
      <App />
      </FirebaseAuthProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
