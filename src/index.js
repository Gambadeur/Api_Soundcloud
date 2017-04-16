import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import './index.css';
import Routes from './architecture/routes.js';


ReactDOM.render(
  <Router history={browserHistory}>
    {Routes}
  </Router>,document.getElementById('root'));
