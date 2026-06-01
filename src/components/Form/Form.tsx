import { Form as AntForm } from 'antd'
import type { FormProps } from './types'
import './Form.scss'

/**
 * Form 组件 - 基于 Ant Design Form 的二次封装
 * 提供统一的表单样式和行为
 */
const Form = (props: FormProps) => {
  return <AntForm {...props} />
}

/**
 * FormItem 组件
 */
const FormItem = (props: FormItemProps) => {
  return <AntForm.Item {...props} />
}

Form.Item = FormItem
Form.List = AntForm.List
Form.useForm = AntForm.useForm
Form.Provider = AntForm.Provider

export default Form
