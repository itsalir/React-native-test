import {ApiRoutes} from '../config/apiConfig';
import callApi from '../utilities/ApiHandler';
import {ProductListType} from './types';

export const getProductList = async (): Promise<ProductListType[]> => {
  const data = await callApi({
    url: ApiRoutes.product.productList,
    method: 'get',
  });

  return data || [];
};

getProductList.getKey = () => [ApiRoutes.product.productList];
