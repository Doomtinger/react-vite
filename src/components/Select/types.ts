import { SelectProps as AntSelectProps } from 'antd'

export interface SelectProps extends Omit<AntSelectProps, 'size'> {
  label?: string
  required?: boolean
}
