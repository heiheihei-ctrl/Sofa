import axios from 'axios';

// 创建 Axios 实例（指向你的 Shopify 商店域名）
const service = axios.create({
  baseURL: `https://${import.meta.env.VITE_PUBLIC_STORE_DOMAIN}/api/2025-07`,
  timeout: 10000,
});

// 请求拦截器（自动添加 Storefront API Token）
service.interceptors.request.use(
  (config) => {
    // 所有请求默认携带 Storefront API Token
    config.headers['X-Shopify-Storefront-Access-Token'] = 
      import.meta.env.VITE_PUBLIC_STOREFRONT_API_TOKEN;
    config.headers['Shopify-Storefront-Private-Token'] = import.meta.env.VITE_PUBLIC_PRIVATE_API_TOKEN;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器（统一处理错误）
service.interceptors.response.use(
  (response) => {
    // 直接返回 GraphQL 的 data 字段
    if (response.config.url.includes('/graphql.json')) {
      return response.data.data || response.data;
    }
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