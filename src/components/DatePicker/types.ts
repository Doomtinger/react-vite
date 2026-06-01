import { DatePickerProps as AntDatePickerProps } from 'antd'

export interface DatePickerProps extends Omit<AntDatePickerProps, 'size'> {
  label?: string
  required?: boolean
}
