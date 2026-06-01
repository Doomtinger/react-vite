import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

/**
 * 创建 axios 实例
 */
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
})

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (config) => {
    // 从 store 获取 token
    const token = localStorage.getItem('user-storage')
    if (token) {
      try {
        const userState = JSON.parse(token)
        if (userState?.state?.token) {
          config.headers.Authorization = `Bearer ${userState.state.token}`
        }
      } catch (error) {
        console.error('Parse token error:', error)
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，跳转登录页
          window.location.href = '/login'
          break
        case 403:
          console.error('没有权限访问')
          break
        case 404:
          console.error('请求的资源不存在')
          break
        case 500:
          console.error('服务器错误')
          break
        default:
          console.error('请求失败:', error.response.data?.message || '未知错误')
      }
    }
    return Promise.reject(error)
  }
)

export default request
