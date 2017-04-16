import React from 'react';
import { Router, Route } from 'react-router';

import App from './App.js';
import About from './about/about.jsx';
import Error404 from './error404/error404'

export default (
    <Router>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/*" component={Error404} />
    </Router>
);

