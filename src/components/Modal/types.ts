import { ModalProps as AntModalProps } from 'antd'

export interface ModalProps extends Omit<AntModalProps, 'size'> {
  // 自定义属性
  confirmLoading?: boolean
}
