import { Modal as AntModal } from 'antd'
import type { ModalProps } from './types'

/**
 * Modal 组件 - 基于 Ant Design Modal 的二次封装
 * 提供统一的弹窗样式和行为
 */
const Modal = ({ confirmLoading = false, ...restProps }: ModalProps) => {
  return <AntModal confirmLoading={confirmLoading} {...restProps} />
}

Modal.confirm = AntModal.confirm
Modal.info = AntModal.info
Modal.success = AntModal.success
Modal.error = AntModal.error
Modal.warning = AntModal.warning

export default Modal
