import { Select as AntSelect } from 'antd'
import type { SelectProps } from './types'
import './Select.scss'

const { Option } = AntSelect

/**
 * Select 组件 - 基于 Ant Design Select 的二次封装
 * 提供统一的选择器样式和行为
 */
const Select = ({ label, required, ...restProps }: SelectProps) => {
  return (
    <div className="app-select-wrapper">
      {label && (
        <label className="app-select-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <AntSelect {...restProps} />
    </div>
  )
}

Select.Option = Option

export default Select
