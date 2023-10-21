import {getProductList} from '../../../api';
import {ProductListType} from '../../../api/types';
import {queryClient} from '../../../contexts';

export const handleLike = (item: ProductListType) => {
  queryClient?.setQueryData<ProductListType[] | undefined>(
    getProductList.getKey(),
    data => {
      if (!data) {
        return undefined;
      }
      const updatedData = updateLikeItem(data, item);
      return updatedData;
    },
  );
};

const updateLikeItem = (data: ProductListType[], item: ProductListType) => {
  const updatedData = data.map((Product: ProductListType) => {
    if (Product.id === item.id) {
      const updatedProduct: ProductListType = {
        ...Product,
        isLiked: !Product.isLiked,
      };
      return updatedProduct;
    } else {
      return Product;
    }
  });

  return updatedData;
};
