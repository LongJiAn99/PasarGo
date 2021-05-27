import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/Login';
import register from './pages/Register';
import './bootstrap/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { config } from './config/firebase';
import { firebase } from "@firebase/app";
import {Route} from 'react-router'
import "@firebase/auth";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <FirebaseAuthProvider {...config} firebase = {firebase}>
      <Route path ="/" exact component = {App} />
      <Route path ="/pages/Login" component = {Login} />
      <Route path ="/pages/register" component = {register} />
      </FirebaseAuthProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
