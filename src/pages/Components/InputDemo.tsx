import { Card, Input } from '@/components'
import { Space } from 'antd'
import './ButtonDemo.scss'

/**
 * Input 输入框组件演示
 */
const InputDemo = () => {
  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1>Input 输入框</h1>
        <p className="demo-description">
          基础的输入框组件，基于 Ant Design Input 二次封装，支持 label、必填标记等扩展功能。
        </p>
      </div>

      <Card title="基础用法" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input placeholder="请输入内容" />
          <Input label="用户名" placeholder="请输入用户名" />
          <Input label="邮箱" required placeholder="请输入邮箱" />
        </Space>
      </Card>

      <Card title="不同尺寸" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input label="大尺寸" size="large" placeholder="Large size" />
          <Input label="默认尺寸" placeholder="Default size" />
          <Input label="小尺寸" size="small" placeholder="Small size" />
        </Space>
      </Card>

      <Card title="前置和后置标签" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input label="网址" placeholder="请输入网址" prefix="http://" suffix=".com" />
          <Input label="金额" placeholder="请输入金额" prefix="¥" />
          <Input label="百分比" placeholder="请输入百分比" suffix="%" />
        </Space>
      </Card>

      <Card title="密码输入框" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input.Password label="密码" placeholder="请输入密码" />
          <Input.Password label="确认密码" required placeholder="请再次输入密码" />
        </Space>
      </Card>

      <Card title="搜索输入框" className="demo-card">
        <Input.Search label="搜索" placeholder="请输入搜索内容" allowClear />
      </Card>

      <Card title="多行文本输入" className="demo-card">
        <Input.TextArea
          label="个人简介"
          placeholder="请输入个人简介"
          rows={4}
          showCount
          maxLength={200}
        />
      </Card>

      <Card title="禁用状态" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input label="禁用输入" placeholder="禁用的输入框" disabled />
          <Input label="只读" placeholder="只读的输入框" readOnly value="只读内容" />
        </Space>
      </Card>

      <Card title="代码示例" className="demo-card">
        <pre className="code-block">
          <code>{`import { Input } from '@/components'

// 基础用法
<Input placeholder="请输入内容" />
<Input label="用户名" placeholder="请输入用户名" />
<Input label="邮箱" required placeholder="请输入邮箱" />

// 密码输入框
<Input.Password label="密码" placeholder="请输入密码" />

// 搜索输入框
<Input.Search label="搜索" placeholder="请输入搜索内容" />

// 多行文本
<Input.TextArea
  label="个人简介"
  placeholder="请输入个人简介"
  rows={4}
  showCount
  maxLength={200}
/>`}</code>
        </pre>
      </Card>
    </div>
  )
}

export default InputDemo
