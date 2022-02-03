import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodPage from './pages/food-page';
import RestaurantsPage from './pages/restaurants-page';
import LayoutHeader from './components/layout-header';
import RestaurantPage from './pages/restaurant-page';

export default function AppContainer() {
  return (
    <BrowserRouter>
      <LayoutHeader />
      <Routes>
        <Route path="/" element={<FoodPage />} />
        <Route path="food" element={<FoodPage />} />
        <Route path="restaurants" element={<RestaurantsPage />} />
        <Route path="restaurants/:id" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
}
