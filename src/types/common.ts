/**
 * 通用响应结构
 */
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

/**
 * 分页参数
 */
export interface PageParams {
  page: number
  pageSize: number
}

/**
 * 分页响应
 */
export interface PageResponse<T = any> {
  list: T[]
  total: number
  page: number
  pageSize: number
}

/**
 * 通用选项
 */
export interface Option {
  label: string
  value: string | number
  disabled?: boolean
}

/**
 * 菜单项
 */
export interface MenuItem {
  key: string
  label: string
  icon?: string
  path?: string
  children?: MenuItem[]
}
