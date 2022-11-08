import axios from 'axios';
const BASE_URL =  'https://tcgbusfs.blob.core.windows.net/blobtcmsv';

const axiosInstance = axios.create({
  // baseURL: BASE_URL,
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
})

export const apiHelper = axiosInstance