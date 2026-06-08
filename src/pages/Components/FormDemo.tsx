import { useState } from 'react'
import { Card, Form, Input, Select, Button, DatePicker } from '@/components'
import type { FormInstance } from 'antd'
import './ButtonDemo.scss'

/**
 * Form 表单组件演示
 */
const FormDemo = () => {
  const [form] = Form.useForm()
  const [formData, setFormData] = useState<any>(null)

  const onFinish = (values: any) => {
    console.log('Form values:', values)
    setFormData(values)
  }

  const onReset = () => {
    form.resetFields()
    setFormData(null)
  }

  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1>Form 表单</h1>
        <p className="demo-description">
          具有数据收集、校验和提交功能的表单组件，基于 Ant Design Form 二次封装。
        </p>
      </div>

      <Card title="基础表单" className="demo-card">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' },
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>

          <Form.Item label="年龄" name="age" rules={[{ required: true, message: '请输入年龄' }]}>
            <Input type="number" placeholder="请输入年龄" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>

        {formData && (
          <div style={{ marginTop: 16, padding: 16, background: '#f5f5f5', borderRadius: 6 }}>
            <h4>提交的数据：</h4>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </Card>

      <Card title="水平布局表单" className="demo-card">
        <Form layout="horizontal" style={{ maxWidth: 800 }}>
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item label="密码" name="password">
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item label="记住我">
            <input type="checkbox" />
          </Form.Item>

          <Form.Item>
            <Button type="primary">登录</Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="内联表单" className="demo-card">
        <Form layout="inline">
          <Form.Item label="用户名">
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item label="密码">
            <Input.Password placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">查询</Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="复杂表单示例" className="demo-card">
        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>

          <Form.Item
            label="性别"
            name="gender"
            rules={[{ required: true, message: '请选择性别' }]}
          >
            <Select placeholder="请选择性别" style={{ width: '100%' }}>
              <Select.Option value="male">男</Select.Option>
              <Select.Option value="female">女</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="出生日期"
            name="birthday"
            rules={[{ required: true, message: '请选择出生日期' }]}
          >
            <DatePicker placeholder="请选择出生日期" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, type: 'email', message: '请输入有效的邮箱地址' }]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>

          <Form.Item
            label="手机号"
            name="phone"
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            label="个人简介"
            name="bio"
          >
            <Input.TextArea
              placeholder="请输入个人简介"
              rows={4}
              showCount
              maxLength={200}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交表单
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="代码示例" className="demo-card">
        <pre className="code-block">
          <code>{`import { Form, Input, Select, Button } from '@/components'

const MyForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Form values:', values)
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>

      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入有效的邮箱地址' },
        ]}
      >
        <Input placeholder="请输入邮箱" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}`}</code>
        </pre>
      </Card>
    </div>
  )
}

export default FormDemo
