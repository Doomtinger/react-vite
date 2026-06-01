import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { useAppStore } from '@/stores'
import './MainLayout.scss'

const { Header, Content, Sider, Footer } = Layout

/**
 * 主布局组件
 */
const MainLayout = () => {
  const { collapsed } = useAppStore()

  return (
    <Layout className="main-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h1>{collapsed ? 'R' : 'React'}</h1>
        </div>
        {/* 导航菜单可以在这里添加 */}
      </Sider>
      <Layout>
        <Header className="layout-header">
          <div className="header-content">
            {/* 菜单内容 */}
          </div>
        </Header>
        <Content className="layout-content">
          <Outlet />
        </Content>
        <Footer className="layout-footer">
          React Vite Framework ©2024
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
