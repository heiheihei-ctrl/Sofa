import service from '../utils/request';
const GET_PRODUCTS = `{ shop { name } }`;

// 使用示例
export const shopifyRequest = {
  graphql: (query, variables = {}) => 
    service.post('/graphql.json', { query:'{ shop { name } }', variables }),
};