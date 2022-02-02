import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Food from './pages/Food';
import Restaurants from './pages/Restaurants';
import LayoutHeader from './components/layout-header';

export default function AppContainer() {
  return (
    <BrowserRouter>
      <LayoutHeader />
      <Routes>
        <Route path="/" element={<Food />} />
        <Route path="food" element={<Food />} />
        <Route path="restaurants" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  );
}
