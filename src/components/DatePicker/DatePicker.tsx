import { DatePicker as AntDatePicker } from 'antd'
import type { DatePickerProps } from './types'
import './DatePicker.scss'

const { RangePicker } = AntDatePicker

/**
 * DatePicker 组件 - 基于 Ant Design DatePicker 的二次封装
 * 提供统一的日期选择器样式和行为
 */
const DatePicker = ({ label, required, ...restProps }: DatePickerProps) => {
  return (
    <div className="app-date-picker-wrapper">
      {label && (
        <label className="app-date-picker-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <AntDatePicker {...restProps} />
    </div>
  )
}

DatePicker.RangePicker = RangePicker

export default DatePicker
