// hydrogen.config.js
export default {
  shopify: {
    storeDomain: 't3qie0-pr.myshopify.com',
    storefrontToken: '9d781fef4a35521e71f7601571e0fe18',
    storefrontApiVersion: '2025-07', // 与你URL中的版本一致
  },
  server: {
    contentSecurityPolicy: {
      connectSrc: [
        "'self'",
        "https://t3qie0-pr.myshopify.com",
        "http://localhost:*" // 开发环境
      ],
    },
  }
};