import service from '../utils/request';

// 查询商品
export const getProducts = async (params) => {
  return service.get('/products', {
    params
  });
}