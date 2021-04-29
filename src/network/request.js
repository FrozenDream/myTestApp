import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, e => {

  })
  // 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, e => {
    console.log(e);
  })
  return instance(config)
}
