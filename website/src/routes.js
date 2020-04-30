import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import About from './about';
import Documentation from './documentation';

const Routes = () => (
  <Router>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/documentation" element={<Documentation />} />
  </Router>
);
export default Routes;
