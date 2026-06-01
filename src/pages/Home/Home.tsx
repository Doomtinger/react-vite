import { Card, Button } from '@/components'
import { useAppStore } from '@/stores'
import './Home.scss'

/**
 * 首页组件
 */
const Home = () => {
  const { theme, toggleTheme, collapsed, toggleCollapsed } = useAppStore()

  return (
    <div className="home-page">
      <Card title="欢迎使用 React Vite Framework">
        <div className="home-content">
          <h2>功能特性</h2>
          <ul>
            <li>✅ Vite + React + TypeScript</li>
            <li>✅ Ant Design 组件库二次封装</li>
            <li>✅ Zustand 状态管理</li>
            <li>✅ React Router 路由管理</li>
            <li>✅ SCSS 样式支持</li>
            <li>✅ ESLint 代码规范</li>
          </ul>

          <div className="demo-section">
            <h3>主题切换演示</h3>
            <p>当前主题: {theme === 'light' ? '浅色' : '深色'}</p>
            <Button onClick={toggleTheme}>切换主题</Button>
          </div>

          <div className="demo-section">
            <h3>侧边栏折叠演示</h3>
            <p>侧边栏状态: {collapsed ? '折叠' : '展开'}</p>
            <Button onClick={toggleCollapsed}>切换侧边栏</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Home
