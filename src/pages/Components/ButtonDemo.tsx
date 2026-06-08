import { useState } from 'react'
import { Card, Button as AppButton } from '@/components'
import { Space, Divider } from 'antd'
import './ButtonDemo.scss'

/**
 * Button 按钮组件演示
 */
const ButtonDemo = () => {
  const [loading, setLoading] = useState(false)

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1>Button 按钮</h1>
        <p className="demo-description">
          基础的按钮组件，基于 Ant Design Button 二次封装，提供统一的样式和行为。
        </p>
      </div>

      <Card title="基础用法" className="demo-card">
        <Space wrap>
          <AppButton type="primary">Primary Button</AppButton>
          <AppButton>Default Button</AppButton>
          <AppButton type="dashed">Dashed Button</AppButton>
          <AppButton type="link">Link Button</AppButton>
        </Space>
      </Card>

      <Card title="不同尺寸" className="demo-card">
        <Space wrap>
          <AppButton type="primary" size="large">
            Large
          </AppButton>
          <AppButton type="primary">Default</AppButton>
          <AppButton type="primary" size="small">
            Small
          </AppButton>
        </Space>
      </Card>

      <Card title="加载状态" className="demo-card">
        <Space wrap>
          <AppButton type="primary" loading={loading} onClick={handleLoadingClick}>
            点击加载
          </AppButton>
          <AppButton type="primary" loading>
            加载中...
          </AppButton>
          <AppButton loading>加载中</AppButton>
        </Space>
      </Card>

      <Card title="按钮组合" className="demo-card">
        <Space.Compact>
          <AppButton type="primary">提交</AppButton>
          <AppButton>保存</AppButton>
          <AppButton type="dashed">取消</AppButton>
        </Space.Compact>
      </Card>

      <Card title="危险按钮" className="demo-card">
        <Space wrap>
          <AppButton type="primary" danger>
            Danger
          </AppButton>
          <AppButton danger>Danger Default</AppButton>
        </Space>
      </Card>

      <Card title="图标按钮" className="demo-card">
        <Space wrap>
          <AppButton type="primary" icon="📝">
            搜索
          </AppButton>
          <AppButton type="primary" icon="📥">
            下载
          </AppButton>
          <AppButton type="primary" icon="❤️">
            喜欢
          </AppButton>
        </Space>
      </Card>

      <Card title="代码示例" className="demo-card">
        <pre className="code-block">
          <code>{`import { Button } from '@/components'

// 基础用法
<Button type="primary">Primary Button</Button>
<Button>Default Button</Button>
<Button type="dashed">Dashed Button</Button>
<Button type="link">Link Button</Button>

// 加载状态
<Button loading={loading} onClick={handleClick}>
  点击加载
</Button>

// 不同尺寸
<Button type="primary" size="large">Large</Button>
<Button type="primary">Default</Button>
<Button type="primary" size="small">Small</Button>`}
          </code>
        </pre>
      </Card>
    </div>
  )
}

export default ButtonDemo
