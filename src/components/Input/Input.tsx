import { Input as AntInput } from 'antd'
import type { InputProps } from './types'
import './Input.scss'

const { TextArea, Password, Search } = AntInput

/**
 * Input 组件 - 基于 Ant Design Input 的二次封装
 * 提供统一的输入框样式和行为
 */
const Input = ({ label, required, ...restProps }: InputProps) => {
  return (
    <div className="app-input-wrapper">
      {label && (
        <label className="app-input-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <AntInput {...restProps} />
    </div>
  )
}

Input.TextArea = TextArea
Input.Password = Password
Input.Search = Search

export default Input
