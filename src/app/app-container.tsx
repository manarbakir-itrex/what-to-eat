import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import FoodsPage from './pages/foods-page';
import RestaurantsPage from './pages/restaurants-page';
import LayoutHeader from './components/layout-header';
import RestaurantPage from './pages/restaurant-page';
import FoodPage from './pages/food-page';

import './app-container.scss';

export default function AppContainer() {
  return (
    <BrowserRouter>
      <Layout className="app-container">
        <LayoutHeader />
        <Content className="app-container_content-container">
          <Routes>
            <Route path="/" element={<RestaurantsPage />} />
            <Route path="foods" element={<FoodsPage />} />
            <Route path="foods/:id" element={<FoodPage />} />
            <Route path="restaurants" element={<RestaurantsPage />} />
            <Route path="restaurants/:id" element={<RestaurantPage />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}
