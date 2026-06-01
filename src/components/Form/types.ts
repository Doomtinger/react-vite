import { FormProps as AntFormProps, FormItemProps as AntFormItemProps } from 'antd'

export interface FormProps extends Omit<AntFormProps, 'size'> {
  // 自定义属性
}

export interface FormItemProps extends Omit<AntFormItemProps, 'size'> {
  // 自定义属性
}
