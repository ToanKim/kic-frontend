import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { SIDEBAR_ITEMS } from './items';
import styles from './styles.modules.scss';

const Sidebar = () => {
  // get user roles somewhere
  const sidebarItems = SIDEBAR_ITEMS.MANAGER;

  const renderSidebarItems = items =>
    items.map(({ title, key, url, icon }) => {
      const Icon = icon;
      return (
        <Menu.Item key={key}>
          <Link to={`${url}`} className={styles.item}>
            <Icon />
            <span className={styles.item}>{title}</span>
          </Link>
        </Menu.Item>
      );
    });

  return (
    <Layout.Sider>
      <Menu mode="inline" inlineIndent="15">
        {renderSidebarItems(sidebarItems)}
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
