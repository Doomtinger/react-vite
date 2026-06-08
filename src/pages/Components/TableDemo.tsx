import { useState } from 'react'
import { Card, Table, Button } from '@/components'
import { Space, Tag } from 'antd'
import type { ColumnsType } from 'antd'
import './ButtonDemo.scss'

interface DataType {
  key: string
  name: string
  age: number
  email: string
  status: 'active' | 'inactive'
  tags: string[]
}

/**
 * Table 表格组件演示
 */
const TableDemo = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const data: DataType[] = [
    {
      key: '1',
      name: '张三',
      age: 32,
      email: 'zhangsan@example.com',
      status: 'active',
      tags: ['开发', '前端'],
    },
    {
      key: '2',
      name: '李四',
      age: 42,
      email: 'lisi@example.com',
      status: 'inactive',
      tags: ['产品', '设计'],
    },
    {
      key: '3',
      name: '王五',
      age: 28,
      email: 'wangwu@example.com',
      status: 'active',
      tags: ['测试', '自动化'],
    },
    {
      key: '4',
      name: '赵六',
      age: 35,
      email: 'zhaoliu@example.com',
      status: 'active',
      tags: ['运维', 'DevOps'],
    },
    {
      key: '5',
      name: '钱七',
      age: 45,
      email: 'qianqi@example.com',
      status: 'inactive',
      tags: ['管理', 'PM'],
    },
  ]

  const columns: ColumnsType<DataType> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? '活跃' : '非活跃'}
        </Tag>
      ),
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag key={tag} color="blue">
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button type="link" size="small">
            编辑
          </Button>
          <Button type="link" size="small" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ]

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys)
    },
  }

  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1>Table 表格</h1>
        <p className="demo-description">
          展示行列数据的表格组件，基于 Ant Design Table 二次封装，支持自动滚动等功能。
        </p>
      </div>

      <Card title="基础表格" className="demo-card">
        <Table columns={columns} dataSource={data} />
      </Card>

      <Card title="可选择表格" className="demo-card">
        <div style={{ marginBottom: 16 }}>
          <span>已选择 {selectedRowKeys.length} 项</span>
          <Button
            type="primary"
            size="small"
            style={{ marginLeft: 8 }}
            onClick={() => setSelectedRowKeys([])}
          >
            清空选择
          </Button>
        </div>
        <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
      </Card>

      <Card title="无边框表格" className="demo-card">
        <Table columns={columns} dataSource={data} bordered={false} />
      </Card>

      <Card title="带头部表格" className="demo-card">
        <Table
          columns={columns}
          dataSource={data}
          title={() => <div>用户列表（共 {data.length} 条数据）</div>}
          footer={() => <div>表格底部</div>}
        />
      </Card>

      <Card title="可排序表格" className="demo-card">
        <Table
          columns={columns}
          dataSource={data}
          onChange={(pagination, filters, sorter) => {
            console.log(' sorter:', sorter)
          }}
        />
      </Card>

      <Card title="固定列表头" className="demo-card">
        <div style={{ marginBottom: 16 }}>
          <p>表格支持固定列表头，在数据量较大时自动启用滚动功能。</p>
        </div>
        <Table columns={columns} dataSource={[...data, ...data, ...data]} />
      </Card>

      <Card title="代码示例" className="demo-card">
        <pre className="code-block">
          <code>{`import { Table, Button, Space, Tag } from '@/components'
import type { ColumnsType } from 'antd'

interface DataType {
  key: string
  name: string
  age: number
  email: string
}

const MyTable = () => {
  const data: DataType[] = [
    {
      key: '1',
      name: '张三',
      age: 32,
      email: 'zhangsan@example.com',
    },
    // ... more data
  ]

  const columns: ColumnsType<DataType> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button type="link" size="small">编辑</Button>
          <Button type="link" size="small" danger>删除</Button>
        </Space>
      ),
    },
  ]

  return <Table columns={columns} dataSource={data} />
}`}</code>
        </pre>
      </Card>
    </div>
  )
}

export default TableDemo
