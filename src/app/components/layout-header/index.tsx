import React from 'react';
import { Affix, Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function LayoutHeader() {
  return (
    <Affix offsetTop={0}>
      <div className="layout-header">
        <h1>What to Eat?</h1>

        <Menu mode="horizontal">
          <Menu.Item key="food">
            <Link to="/food">Food</Link>
          </Menu.Item>
          <Menu.Item key="restaurants">
            <Link to="/restaurants">Restaurants</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Affix>
  );
}
