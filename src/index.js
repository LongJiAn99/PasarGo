import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './bootstrap/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router'
import Login from './pages/Login'

ReactDOM.render(
  <Router>
    <Route path ="/" component ={App} />
    <Route path ="/Login" component = {Login} />
  </Router>,
  document.getElementById('root')
);
