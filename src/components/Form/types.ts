import { FormProps as AntFormProps, FormItemProps as AntFormItemProps } from 'antd'
import type { ReactNode } from 'react'

export interface FormProps extends Omit<AntFormProps, 'size'> {
  // 自定义属性
  children?: ReactNode
}

export interface FormItemProps extends Omit<AntFormItemProps, 'size'> {
  // 自定义属性
  children?: ReactNode
}
