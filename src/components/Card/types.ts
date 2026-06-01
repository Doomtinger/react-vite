import { CardProps as AntCardProps } from 'antd'

export interface CardProps extends Omit<AntCardProps, 'size'> {
  // 自定义属性
}
