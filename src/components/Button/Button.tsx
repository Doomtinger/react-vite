import { Button as AntButton } from 'antd'
import type { ButtonProps } from './types'
import './Button.scss'

/**
 * Button 组件 - 基于 Ant Design Button 的二次封装
 * 提供统一的按钮样式和行为
 */
const Button = ({ children, loading = false, ...restProps }: ButtonProps) => {
  return (
    <AntButton loading={loading} {...restProps}>
      {children}
    </AntButton>
  )
}

export default Button
