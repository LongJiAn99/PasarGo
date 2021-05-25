import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './bootstrap/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
