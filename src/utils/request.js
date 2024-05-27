import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useTokenStore } from '../stores/token'
const baseURL = '/api'
const instance = axios.create({ baseURL })

instance.interceptors.request.use(
  (config) => {
    const tokenStore = useTokenStore()
    if (tokenStore.token) {
      config.headers.Authorization = tokenStore.token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
import router from '../router'
//添加响应拦截器
instance.interceptors.response.use(
  (result) => {
    if (result.data.code === 0) {
      return result.data
    }
    ElMessage.error(result.data.message ? result.data.message : '服务异常')
    return Promise.reject(result.data)
  },
  (err) => {
    if (err.response.status === 401) {
      ElMessage.error('请先登录')
      router.push('/login')
    } else {
      ElMessage.error('服务异常')
      return Promise.reject(err)
    }
  }
)

export default instance
