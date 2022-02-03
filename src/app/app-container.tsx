import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import FoodPage from './pages/food-page';
import RestaurantsPage from './pages/restaurants-page';
import LayoutHeader from './components/layout-header';
import RestaurantPage from './pages/restaurant-page';

import './app-container.scss';

export default function AppContainer() {
  return (
    <BrowserRouter>
      <Layout>
        <LayoutHeader />
        <Content className="layout-container">
          <Routes>
            <Route path="/" element={<FoodPage />} />
            <Route path="food" element={<FoodPage />} />
            <Route path="restaurants" element={<RestaurantsPage />} />
            <Route path="restaurants/:id" element={<RestaurantPage />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}
