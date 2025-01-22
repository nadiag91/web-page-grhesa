// src/components/AppRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Nosotros from './Nosotros';
import BabosilCebo from './Productos/BabosilCebo';
import BabosilPellet from './Productos/BabosilPellet';
import NotFound from './NotFound';
import Catalog from './Catalog';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/nosotros" element={<Nosotros />} /> 
      <Route path="/productos/babosil-cebo" element={<BabosilCebo />} /> 
      <Route path="/productos/babosil-pellet" element={<BabosilPellet />} /> 
      <Route path="/catalogo" element={<Catalog />} />

      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
};

export default AppRoutes;
