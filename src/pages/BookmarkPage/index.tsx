import {Animated, RefreshControl, StyleSheet} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {ProductListType} from '../../api/types';
import {getProductList} from '../../api';
import LoadingView from '../../components/LoadingView';
import ProductBox from '../ProductList/components/ProductBox';
import HeaderList from '../ProductList/components/HeaderList';

const BookmarkPage = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

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
  const list = searchTerm
    ? data?.filter(
        item =>
          item.isBookmark &&
          item.title.toLocaleLowerCase().includes(searchTerm),
      )
    : data?.filter(item => item.isBookmark);

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
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        ListHeaderComponent={
          <Animated.View style={{transform: [{translateY}]}}>
            <HeaderList
              bookmark
              onChangeText={text => setSearchTerm(text)}
              data={list}
            />
          </Animated.View>
        }
      />
    </LoadingView>
  );
};

export default BookmarkPage;

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
