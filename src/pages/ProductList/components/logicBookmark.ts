import {getProductDetails, getProductList} from '../../../api';
import {ProductListType} from '../../../api/types';
import {queryClient} from '../../../contexts';

export const handleBookmark = (item: ProductListType) => {
  queryClient?.setQueryData<ProductListType | undefined>(
    getProductDetails.getKey(item.id),
    data => {
      if (!data) {
        return undefined;
      }
      return updateBookmarkItem(item);
    },
  );
  queryClient?.setQueryData<ProductListType[] | undefined>(
    getProductList.getKey(),
    data => {
      if (!data) {
        return undefined;
      }
      return updateBookmarkItemList(data, item);
    },
  );
};

const updateBookmarkItem = (data: ProductListType) => {
  return {
    ...data,
    isBookmark: !data.isBookmark,
  };
};

const updateBookmarkItemList = (
  data: ProductListType[],
  item: ProductListType,
) => {
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
