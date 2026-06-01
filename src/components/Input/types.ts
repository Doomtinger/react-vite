import { InputProps as AntInputProps } from 'antd'

export interface InputProps extends Omit<AntInputProps, 'size'> {
  // 自定义属性
  label?: string
  required?: boolean
}
