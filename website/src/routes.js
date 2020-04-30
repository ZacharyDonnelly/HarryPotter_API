import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './app';
import About from './about';
import Documentation from './documentation';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/documentation" element={<Documentation />} />
    </Routes>
  </BrowserRouter>
);
export default Routing;
