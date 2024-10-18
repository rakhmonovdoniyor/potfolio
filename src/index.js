import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReadMore from './components/readmore/readmore';
import { WrapFlex } from './styles/homestyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  {/* <WrapFlex></WrapFlex> */}
    <Routes>
    <Route path='/' element={<Home/> } />
    <Route path='/readmore' element={<ReadMore/> } />
    <Route path='/contact'element={<ReadMore/> } />
    </Routes>
 
    </BrowserRouter>
  </React.StrictMode>
);

 