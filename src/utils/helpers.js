import axios from 'axios';
import { BASE_URL } from '../global/constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

// //發請前求先做
// axiosInstance.interceptors.request.use(
//   config => {
//     // 從 localStorage 將 token 取出
//     const token = localStorage.getItem('token')

//     // 如果 token 存在的話，則帶入到 headers 當中
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   err => Promise.reject(err)
// )

export const apiHelper = axiosInstance
