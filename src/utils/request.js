import axios from 'axios'
import { showToast } from 'vant'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      if (res.code === 0) {
        return res
      } else {
        showToast('Error')
        return Promise.reject(new Error('Error'))
      }
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
