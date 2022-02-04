import React, { useMemo } from 'react';
import { Affix, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import './layout-header.scss';

export default function LayoutHeader() {
  const location = useLocation();

  // to highlight correct link Ant.Menu requires property selectedKeys
  const activeKeys = useMemo(() => {
    const keys = location.pathname.split('/');
    // since pathname starts from '/' first element will be empty
    keys.shift();

    return keys;
  }, [location]);

  return (
    <Affix offsetTop={0}>
      <div className="layout-header">
        <Link to="/" className="logo">What to Eat?</Link>

        <Menu
          className="menu-transparent"
          selectedKeys={activeKeys}
          mode="horizontal"
        >
          <Menu.Item key="restaurants">
            <Link to="/restaurants">Restaurants</Link>
          </Menu.Item>
          <Menu.Item key="foods">
            <Link to="/foods">Food</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Affix>
  );
}
