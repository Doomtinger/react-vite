import { ButtonProps as AntButtonProps } from 'antd'

export interface ButtonProps extends Omit<AntButtonProps, 'size'> {
  // 自定义属性可以在这里添加
  loading?: boolean
}
