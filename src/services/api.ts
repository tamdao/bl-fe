import axios from 'axios'
import qs from 'qs'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  paramsSerializer: {
    encode: (params) => {
      return qs.stringify(params, { encodeValuesOnly: true })
    },
  },
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default axiosInstance
