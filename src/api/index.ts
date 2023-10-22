import {ApiRoutes} from '../config/apiConfig';
import callApi from '../utilities/ApiHandler';
import {createURL} from '../utilities/CreateUrl';
import {ProductListType} from './types';

export const getProductList = async (): Promise<ProductListType[]> => {
  const data = await callApi({
    url: ApiRoutes.product.productList,
    method: 'get',
  });

  return data || [];
};

getProductList.getKey = () => [ApiRoutes.product.productList];

export const getProductDetails = async (
  id: string,
): Promise<ProductListType> => {
  const data = await callApi({
    url: createURL(ApiRoutes.product.productDetails, {id}),
    method: 'get',
  });

  return data || undefined;
};

getProductDetails.getKey = (id: string) => [
  ApiRoutes.product.productDetails,
  {id},
];

export const updateBookMark = async (id: string, data: ProductListType) => {
  return callApi({
    url: createURL(ApiRoutes.product.productDetails, {id}),
    method: 'put',
    data,
  });
};
