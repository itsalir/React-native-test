import {StyleSheet, Animated, RefreshControl} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import ProductBox from './components/ProductBox';
import {useQuery} from '@tanstack/react-query';
import {getProductList} from '../../api';
import {ProductListType} from '../../api/types';
import LoadingView from '../../components/LoadingView';
import HeaderList from './components/HeaderList';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const scrollY = useRef(new Animated.Value(0)).current;
  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });
  const {data, refetch, isLoading, isFetching, error} = useQuery<
    ProductListType[]
  >({
    queryKey: getProductList.getKey(),
    queryFn: (): Promise<ProductListType[]> => getProductList(),
    refetchOnMount: false,
  });

  const handleRefresh = useCallback(async () => {
    refetch();
  }, [refetch]);

  const list = searchTerm
    ? data?.filter(item => item.title.toLocaleLowerCase().includes(searchTerm))
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
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        ListHeaderComponent={
          <Animated.View style={{transform: [{translateY}]}}>
            <HeaderList
              onChangeText={text => setSearchTerm(text)}
              data={list}
            />
          </Animated.View>
        }
      />
    </LoadingView>
    ///shard elenet

    ///measure
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 20,
    gap: 10,
    backgroundColor: '#F4F4F4',
    paddingBottom: 20,
  },
  columnWrapper: {
    gap: 10,
    justifyContent: 'space-between',
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
