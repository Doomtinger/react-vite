import { Card, Button } from '@/components'
import { Space } from 'antd'
import './ButtonDemo.scss'

/**
 * Card 卡片组件演示
 */
const CardDemo = () => {
  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1>Card 卡片</h1>
        <p className="demo-description">
          通用卡片容器，基于 Ant Design Card 二次封装，可承载文字、列表、图片等内容。
        </p>
      </div>

      <Card title="基础卡片" className="demo-card">
        <p>卡片内容...</p>
        <p>这是基础的卡片示例，可以包含任意内容。</p>
      </Card>

      <Card title="无边框卡片" bordered={false} className="demo-card">
        <p>这是无边框的卡片示例。</p>
      </Card>

      <Card title="简洁卡片" className="demo-card" extra={<Button type="link">更多</Button>}>
        <p>卡片内容...</p>
        <p>带额外操作的卡片。</p>
      </Card>

      <Card
        title="灵活的内容区域"
        className="demo-card"
        extra={<a href="#">更多</a>}
        style={{ width: '100%' }}
      >
        <p style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.65)', marginBottom: '16px' }}>
          卡片内容区域可以放置任何元素，这里演示了不同样式的文本和按钮。
        </p>
        <Space>
          <Button type="primary">主要操作</Button>
          <Button>次要操作</Button>
        </Space>
      </Card>

      <Card title="卡片列表" className="demo-card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
          <Card type="inner" title="卡片1">
            <p>卡片1内容</p>
          </Card>
          <Card type="inner" title="卡片2">
            <p>卡片2内容</p>
          </Card>
          <Card type="inner" title="卡片3">
            <p>卡片3内容</p>
          </Card>
        </div>
      </Card>

      <Card title="加载状态卡片" className="demo-card" loading>
        <p>加载中...</p>
      </Card>

      <Card title="卡片封面" className="demo-card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          <Card
            hoverable
            cover={
              <div
                style={{
                  height: 200,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 48,
                }}
              >
                📷
              </div>
            }
          >
            <Card.Meta title="卡片标题" description="这是卡片描述信息" />
          </Card>

          <Card
            hoverable
            cover={
              <div
                style={{
                  height: 200,
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 48,
                }}
              >
                🎨
              </div>
            }
          >
            <Card.Meta title="设计卡片" description="这是一张设计相关的卡片" />
          </Card>

          <Card
            hoverable
            cover={
              <div
                style={{
                  height: 200,
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 48,
                }}
              >
                💻
              </div>
            }
          >
            <Card.Meta title="技术卡片" description="这是一张技术相关的卡片" />
          </Card>
        </div>
      </Card>

      <Card title="代码示例" className="demo-card">
        <pre className="code-block">
          <code>{`import { Card, Button, Space } from '@/components'

// 基础卡片
<Card title="基础卡片">
  <p>卡片内容...</p>
</Card>

// 带额外操作的卡片
<Card title="卡片标题" extra={<Button type="link">更多</Button>}>
  <p>卡片内容...</p>
</Card>

// 内嵌卡片
<Card title="外层卡片">
  <Card type="inner" title="内层卡片">
    <p>内层卡片内容</p>
  </Card>
</Card>

// 带封面的卡片
<Card
  hoverable
  cover={<img alt="example" src="image.png" />}
>
  <Card.Meta title="卡片标题" description="卡片描述" />
</Card>`}</code>
        </pre>
      </Card>
    </div>
  )
}

export default CardDemo
