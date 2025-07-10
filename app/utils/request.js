import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 10000,
});

// 请求拦截器（自动添加 Storefront API Token）
service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器（统一处理错误）
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorMessage = error.response?.data?.errors?.[0]?.message || 
                        '请求失败，请检查网络或配置';
    console.error('API Error:', errorMessage);
    throw new Error(errorMessage); // 抛出错误供业务层捕获
  }
);

export default service;