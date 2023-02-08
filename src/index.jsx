import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import { Portfolio } from './pages/Portfolio';

const Converter = lazy(() => import('./pages/Converter').then(module => {
  return { default: module.Converter}
}));

const Rates = lazy(() => import('./pages/Rates').then(module => {
  return { default: module.Rates}
}));

const Todolist = lazy(() => import('./pages/Todolist').then(module => {
  return { default: module.Todolist}
}));

const Speedtype = lazy(() => import('./pages/Speedtype').then(module => {
  return { default: module.Speedtype}
}));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/converter" element={<Converter />}>
        <Route path="/converter/rates" element={<Rates />} />
      </Route>
      <Route path="/todolist" element={<Todolist />} />
      <Route path="/speedtype" element={<Speedtype />} />
    </Routes>
  </BrowserRouter>
);
