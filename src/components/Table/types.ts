import { TableProps as AntTableProps } from 'antd'

export interface TableProps<T = any> extends Omit<AntTableProps<T>, 'size'> {
  // 自定义属性
  autoScroll?: boolean
}
