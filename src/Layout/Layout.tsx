import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { routes } from '../routes';
import { Link, useLocation } from 'react-router-dom';
import { getPathTitle } from '../utils/getPathTitle';
import './Layout.css';
import type { MenuProps } from 'antd';
import Icon, { HomeOutlined } from '@ant-design/icons';
import { CatSVG } from '../components/CatSVG';

type MenuItem = Required<MenuProps>['items'][number];

const Layout: React.FC<any> = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const menuItems: MenuItem[] = routes.map((route) => ({
    icon: <route.icon />,
    key: route.path,
    label: <Link to={route.path}>{getPathTitle(route.path)}</Link>
  }));

  const { pathname } = useLocation();

  return (
    <AntLayout hasSider>
      <AntLayout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: 'auto',
          height: '100vh'
        }}>
        <div className='logo'>
          <Icon component={CatSVG} />
          {!collapsed && <span className='logo__desc'>CATS</span>}
        </div>
        <Menu
          theme='dark'
          mode='inline'
          items={menuItems}
          selectedKeys={[`/${pathname.split('/')[1]}`]}
          style={{ marginTop: 20 }}
        />
      </AntLayout.Sider>
      <AntLayout className='site-layout'>
        <AntLayout.Content
          style={{
            margin: '24px 16px',
            overflow: 'initial'
          }}>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              overflow: 'scroll',
              height: 'calc(100vh - 48px)',
              display: 'flex',
              flexDirection: 'column'
            }}>
            {children}
          </div>
        </AntLayout.Content>
      </AntLayout>
    </AntLayout>
  );
};

export { Layout };
