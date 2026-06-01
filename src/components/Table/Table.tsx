import { Table as AntTable } from 'antd'
import type { TableProps } from './types'
import './Table.scss'

/**
 * Table 组件 - 基于 Ant Design Table 的二次封装
 * 提供统一的表格样式和行为
 */
const Table = <T extends Record<string, any>>({
  autoScroll = true,
  ...restProps
}: TableProps<T>) => {
  const scroll = autoScroll ? { y: 'calc(100vh - 400px)' } : restProps.scroll

  return <AntTable<T> scroll={scroll} {...restProps} />
}

export default Table
