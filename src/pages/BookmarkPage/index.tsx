import {Animated, RefreshControl, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {ProductListType} from '../../api/types';
import {getProductList} from '../../api';
import LoadingView from '../../components/LoadingView';
import ProductBox from '../ProductList/components/ProductBox';
import HeaderList from '../ProductList/components/HeaderList';
import EmptyList from '../../components/EmptyList';

const BookmarkPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const {data, refetch, isLoading, error, isFetching} = useQuery<
    ProductListType[]
  >({
    queryKey: getProductList.getKey(),
    queryFn: getProductList,
    refetchOnMount: false,
  });
  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);
  const list = searchTerm
    ? data?.filter(
        item =>
          item.isBookmark &&
          item.title
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase()),
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
          <RefreshControl refreshing={isFetching} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={<EmptyList message="Bookmark is Empty" />}
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <HeaderList
            bookmark
            data={data}
            onChangeText={text => setSearchTerm(text)}
          />
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
    paddingHorizontal: 10,
    gap: 10,
    backgroundColor: '#F4F4F4',
    paddingBottom: 20,
    alignItems: 'flex-start',
  },
  columnWrapper: {
    gap: 10,
  },
});
