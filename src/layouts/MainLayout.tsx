import { Layout, Menu } from 'antd'
import { useNavigate, useLocation, Outlet, NavLink } from 'react-router-dom'
import { useAppStore } from '@/stores'
import { COMPONENT_ROUTES } from '@/config/routes'
import type { MenuProps } from 'antd'
import './MainLayout.scss'

const { Header, Content, Sider, Footer } = Layout

type MenuItem = Required<MenuProps>['items'][number]

/**
 * 主布局组件
 */
const MainLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { collapsed } = useAppStore()

  // 转换组件路由为菜单项
  const componentMenuItems: MenuItem[] = COMPONENT_ROUTES.map((route) => ({
    key: route.path,
    label: <NavLink to={route.path}>{route.label}</NavLink>,
  }))

  const menuItems: MenuItem[] = [
    {
      key: '/',
      label: <NavLink to="/">首页</NavLink>,
    },
    {
      type: 'group',
      label: '组件演示',
      children: componentMenuItems,
    },
  ]

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (key !== location.pathname) {
      navigate(key)
    }
  }

  return (
    <Layout className="main-layout">
      <Sider trigger={null} collapsible collapsed={collapsed} width={260}>
        <div className="logo">
          <h1>{collapsed ? 'R' : 'React'}</h1>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header className="layout-header">
          <div className="header-content">
            <div className="header-left">
              {/* 可以添加面包屑或其他导航元素 */}
              <span className="page-title">
                {location.pathname === '/' ? '首页' : COMPONENT_ROUTES.find(r => r.path === location.pathname)?.label || '组件演示'}
              </span>
            </div>
            <div className="header-right">
              {/* 可以添加用户信息、通知等 */}
            </div>
          </div>
        </Header>
        <Content className="layout-content">
          <Outlet />
        </Content>
        <Footer className="layout-footer">
          React Vite Framework ©2024 Created with ❤️
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
