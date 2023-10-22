import {getProductDetails, getProductList} from '../../../api';
import {ProductListType} from '../../../api/types';
import {queryClient} from '../../../contexts';

export const handleLike = (item: ProductListType) => {
  queryClient?.setQueryData<ProductListType | undefined>(
    getProductDetails.getKey(item.id),
    data => {
      if (!data) {
        return undefined;
      }
      return updateLikeItem(item);
    },
  );
  queryClient?.setQueryData<ProductListType[] | undefined>(
    getProductList.getKey(),
    data => {
      if (!data) {
        return undefined;
      }
      return updateLikeItemList(data, item);
    },
  );
};

const updateLikeItem = (data: ProductListType) => {
  return {
    ...data,
    isBookmark: !data.isBookmark,
  };
};

const updateLikeItemList = (data: ProductListType[], item: ProductListType) => {
  const updatedData = data.map((Product: ProductListType) => {
    if (Product.id === item.id) {
      const updatedProduct: ProductListType = {
        ...Product,
        isBookmark: !Product.isBookmark,
      };
      return updatedProduct;
    } else {
      return Product;
    }
  });

  return updatedData;
};
