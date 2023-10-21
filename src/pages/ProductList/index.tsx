import {StyleSheet, Animated, RefreshControl} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import ProductBox from './components/ProductBox';
import {useQuery} from '@tanstack/react-query';
import {getProductList} from '../../api';
import {ProductListType} from '../../api/types';
import LoadingView from '../../components/LoadingView';
import HeaderList from './components/HeaderList';

const ProductList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [newData, setNewData] = useState<ProductListType[] | undefined>([]);

  const scrollY = useRef(new Animated.Value(0)).current;
  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });
  const {data, refetch, isLoading, error} = useQuery<ProductListType[]>({
    queryKey: getProductList.getKey(),
    queryFn: getProductList,
  });

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (text: string) => {
    const filterData: ProductListType[] | undefined = data?.filter(item =>
      item.title.includes(text),
    );

    if (filterData && filterData.length > 0) {
      setNewData(filterData);
    } else {
      setNewData(undefined);
    }
  };

  return (
    <LoadingView {...{isLoading, error, refetch}}>
      <Animated.FlatList
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
        data={newData?.length ? newData : data}
        style={styles.container}
        numColumns={2}
        keyExtractor={item => item.id + item.title}
        renderItem={({item, index}) => <ProductBox key={index} {...{item}} />}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        ListHeaderComponent={
          <Animated.View style={{transform: [{translateY}]}}>
            <HeaderList onChangeText={text => handleSearch(text)} data={data} />
          </Animated.View>
        }
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
    marginHorizontal: 20,
    gap: 10,
    backgroundColor: '#F4F4F4',
    paddingBottom: 20,
    zIndex: 1,
  },
  columnWrapper: {
    gap: 20,
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
