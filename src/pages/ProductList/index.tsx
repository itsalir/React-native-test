import {StyleSheet, RefreshControl} from 'react-native';
import React, {useCallback, useState} from 'react';
import ProductBox from './components/ProductBox';
import {useQuery} from '@tanstack/react-query';
import {getProductList} from '../../api';
import {ProductListType} from '../../api/types';
import LoadingView from '../../components/LoadingView';
import HeaderList from './components/HeaderList';
import EmptyList from '../../components/EmptyList';
import Animated from 'react-native-reanimated';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {data, refetch, isLoading, isFetching, error} = useQuery<
    ProductListType[]
  >({
    queryKey: getProductList.getKey(),
    queryFn: (): Promise<ProductListType[]> => getProductList(),
    refetchOnMount: false,
  });

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const list = searchTerm
    ? data?.filter(item =>
        item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
      )
    : data;
  return (
    <LoadingView {...{isLoading, error, refetch}}>
      <Animated.FlatList
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
        data={list}
        style={styles.container}
        numColumns={2}
        keyExtractor={item => item.id + item.title}
        renderItem={({item}) => <ProductBox {...{item}} />}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={handleRefresh} />
        }
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <HeaderList data={data} onChangeText={text => setSearchTerm(text)} />
        }
        ListEmptyComponent={<EmptyList message="Item not found" />}
      />
    </LoadingView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
    gap: 10,
    backgroundColor: '#F4F4F4',
    paddingBottom: 20,
    alignItems: 'center',
  },
  columnWrapper: {
    gap: 10,
  },
});

///  api have pagintion I used to useInfiniteQuery

// const {
//   data,
//   fetchNextPage,
//   hasNextPage,
//   refetch,
//   isLoading,
//   error,
//   isFetchingNextPage,
// } = useInfiniteQuery<InfiniteData<ProductListType[]>>(
//   getProductList.getKey(),
//   async ({pageParam = 1}) => await getProductList(pageParam),
//   {
//     getNextPageParam: (lastPage, allPages) => {
//       if (!lastPage) {
//         return 1;
//       }
//       const nextPage = lastPage.length ? allPages.length + 1 : false;
//       return nextPage;
//     },
//   },
// );
