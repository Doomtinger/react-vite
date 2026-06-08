import { Card, DatePicker } from '@/components'
import { Space } from 'antd'
import dayjs from 'dayjs'
import './ButtonDemo.scss'

/**
 * DatePicker 日期选择器组件演示
 */
const DatePickerDemo = () => {
  return (
    <div className="component-demo">
      <div className="demo-header">
        <h1>DatePicker 日期选择器</h1>
        <p className="demo-description">
          选择或输入日期的组件，基于 Ant Design DatePicker 二次封装，支持 label、必填标记等扩展功能。
        </p>
      </div>

      <Card title="基础用法" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <DatePicker label="选择日期" placeholder="请选择日期" style={{ width: '100%' }} />
          <DatePicker label="必选日期" required placeholder="请选择日期" style={{ width: '100%' }} />
        </Space>
      </Card>

      <Card title="不同尺寸" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <DatePicker label="大尺寸" size="large" placeholder="请选择日期" style={{ width: '100%' }} />
          <DatePicker label="默认尺寸" placeholder="请选择日期" style={{ width: '100%' }} />
          <DatePicker label="小尺寸" size="small" placeholder="请选择日期" style={{ width: '100%' }} />
        </Space>
      </Card>

      <Card title="日期格式" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <DatePicker
            label="年-月-日"
            format="YYYY-MM-DD"
            placeholder="请选择日期"
            style={{ width: '100%' }}
          />
          <DatePicker
            label="年/月/日"
            format="YYYY/MM/DD"
            placeholder="请选择日期"
            style={{ width: '100%' }}
          />
          <DatePicker
            label="自定义格式"
            format="YYYY年MM月DD日"
            placeholder="请选择日期"
            style={{ width: '100%' }}
          />
        </Space>
      </Card>

      <Card title="日期范围选择" className="demo-card">
        <DatePicker.RangePicker
          label="日期范围"
          placeholder={['开始日期', '结束日期']}
          style={{ width: '100%' }}
        />
      </Card>

      <Card title="月份选择" className="demo-card">
        <DatePicker.MonthPicker
          label="选择月份"
          placeholder="请选择月份"
          style={{ width: '100%' }}
        />
      </Card>

      <Card title="年份选择" className="demo-card">
        <DatePicker.YearPicker
          label="选择年份"
          placeholder="请选择年份"
          style={{ width: '100%' }}
        />
      </Card>

      <Card title="时间选择" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <DatePicker
            label="选择日期时间"
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择日期时间"
            style={{ width: '100%' }}
          />
          <DatePicker.RangePicker
            label="日期时间范围"
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder={['开始时间', '结束时间']}
            style={{ width: '100%' }}
          />
        </Space>
      </Card>

      <Card title="禁用日期" className="demo-card">
        <DatePicker
          label="禁用今天之前"
          placeholder="请选择日期"
          style={{ width: '100%' }}
          disabledDate={(current) => {
            return current && current < dayjs().endOf('day')
          }}
        />
      </Card>

      <Card title="禁用状态" className="demo-card">
        <Space direction="vertical" style={{ width: '100%' }}>
          <DatePicker label="禁用日期" placeholder="禁用的日期选择器" disabled style={{ width: '100%' }} />
          <DatePicker.RangePicker
            label="禁用日期范围"
            placeholder={['开始日期', '结束日期']}
            disabled
            style={{ width: '100%' }}
          />
        </Space>
      </Card>

      <Card title="额外页脚" className="demo-card">
        <DatePicker
          label="带额外页脚"
          placeholder="请选择日期"
          style={{ width: '100%' }}
          renderExtraFooter={() => '额外页脚内容'}
        />
      </Card>

      <Card title="代码示例" className="demo-card">
        <pre className="code-block">
          <code>{`import { DatePicker } from '@/components'
import dayjs from 'dayjs'

// 基础用法
<DatePicker
  label="选择日期"
  placeholder="请选择日期"
  style={{ width: '100%' }}
/>

// 日期范围选择
<DatePicker.RangePicker
  label="日期范围"
  placeholder={['开始日期', '结束日期']}
  style={{ width: '100%' }}
/>

// 带时间选择
<DatePicker
  label="选择日期时间"
  showTime
  format="YYYY-MM-DD HH:mm:ss"
  placeholder="请选择日期时间"
  style={{ width: '100%' }}
/>

// 禁用今天之前的日期
<DatePicker
  label="禁用今天之前"
  placeholder="请选择日期"
  style={{ width: '100%' }}
  disabledDate={(current) => {
    return current && current < dayjs().endOf('day')
  }}
/>`}</code>
        </pre>
      </Card>
    </div>
  )
}

export default DatePickerDemo
