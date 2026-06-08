import { Card, Select } from '@/components'
import { Space } from 'antd'
import './ButtonDemo.scss'

/**
 * Select 选择器组件演示
 */
const SelectDemo = () => {
  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1>Select 选择器</h1>
        <p className="demo-description">
          下拉选择器，基于 Ant Design Select 二次封装，支持 label、必填标记等扩展功能。
        </p>
      </div>

      <Card title="基础用法" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select label="选择" placeholder="请选择" style={{ width: '100%' }}>
            <Select.Option value="1">选项一</Select.Option>
            <Select.Option value="2">选项二</Select.Option>
            <Select.Option value="3">选项三</Select.Option>
          </Select>
          <Select label="必选" required placeholder="请选择" style={{ width: '100%' }}>
            <Select.Option value="1">选项一</Select.Option>
            <Select.Option value="2">选项二</Select.Option>
          </Select>
        </Space>
      </Card>

      <Card title="不同尺寸" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select label="大尺寸" size="large" placeholder="请选择" style={{ width: '100%' }}>
            <Select.Option value="1">选项一</Select.Option>
            <Select.Option value="2">选项二</Select.Option>
          </Select>
          <Select label="默认尺寸" placeholder="请选择" style={{ width: '100%' }}>
            <Select.Option value="1">选项一</Select.Option>
            <Select.Option value="2">选项二</Select.Option>
          </Select>
          <Select label="小尺寸" size="small" placeholder="请选择" style={{ width: '100%' }}>
            <Select.Option value="1">选项一</Select.Option>
            <Select.Option value="2">选项二</Select.Option>
          </Select>
        </Space>
      </Card>

      <Card title="禁用选项" className="demo-card">
        <Select label="选择（包含禁用项）" placeholder="请选择" style={{ width: '100%' }}>
          <Select.Option value="1">选项一</Select.Option>
          <Select.Option value="2" disabled>
            选项二（禁用）
          </Select.Option>
          <Select.Option value="3">选项三</Select.Option>
        </Select>
      </Card>

      <Card title="多选模式" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Select
            label="多选"
            mode="multiple"
            placeholder="请选择多个选项"
            style={{ width: '100%' }}
          >
            <Select.Option value="1">选项一</Select.Option>
            <Select.Option value="2">选项二</Select.Option>
            <Select.Option value="3">选项三</Select.Option>
            <Select.Option value="4">选项四</Select.Option>
          </Select>
          <Select
            label="标签多选"
            mode="tags"
            placeholder="请输入或选择"
            style={{ width: '100%' }}
          >
            <Select.Option value="1">选项一</Select.Option>
            <Select.Option value="2">选项二</Select.Option>
          </Select>
        </Space>
      </Card>

      <Card title="分组" className="demo-card">
        <Select label="分组选择" placeholder="请选择" style={{ width: '100%' }}>
          <Select.OptGroup label="分组一">
            <Select.Option value="1">选项一</Select.Option>
            <Select.Option value="2">选项二</Select.Option>
          </Select.OptGroup>
          <Select.OptGroup label="分组二">
            <Select.Option value="3">选项三</Select.Option>
            <Select.Option value="4">选项四</Select.Option>
          </Select.OptGroup>
        </Select>
      </Card>

      <Card title="搜索筛选" className="demo-card">
        <Select
          label="搜索选择"
          showSearch
          placeholder="请输入搜索内容"
          style={{ width: '100%' }}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            { value: '1', label: '选项一' },
            { value: '2', label: '选项二' },
            { value: '3', label: '选项三' },
            { value: '4', label: '选项四' },
          ]}
        />
      </Card>

      <Card title="代码示例" className="demo-card">
        <pre className="code-block">
          <code>{`import { Select } from '@/components'

// 基础用法
<Select label="选择" placeholder="请选择" style={{ width: '100%' }}>
  <Select.Option value="1">选项一</Select.Option>
  <Select.Option value="2">选项二</Select.Option>
  <Select.Option value="3">选项三</Select.Option>
</Select>

// 多选模式
<Select
  label="多选"
  mode="multiple"
  placeholder="请选择多个选项"
  style={{ width: '100%' }}
>
  <Select.Option value="1">选项一</Select.Option>
  <Select.Option value="2">选项二</Select.Option>
</Select>

// 搜索筛选
<Select
  label="搜索选择"
  showSearch
  placeholder="请输入搜索内容"
  style={{ width: '100%' }}
  options={[
    { value: '1', label: '选项一' },
    { value: '2', label: '选项二' },
  ]}
/>`}</code>
        </pre>
      </Card>
    </div>
  )
}

export default SelectDemo
