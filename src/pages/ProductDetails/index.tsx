import {View, StyleSheet, Pressable, Text} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProductListType} from '../../api/types';
import HeaderProduct from './components/HeaderProduct';
import InfoProduct from './components/InfoProduct';
import SizeProduct from './components/SizeProduct';
import {getProductDetails} from '../../api';
import {useQuery} from '@tanstack/react-query';
import LoadingView from '../../components/LoadingView';
import {RootStackParamList} from '../../types/NavigationTypes';
import Header from './components/Header';

const ProductDetails = () => {
  const {id} =
    useRoute<RouteProp<RootStackParamList, 'ProductDetails'>>().params;
  const {data, refetch, isLoading, error} = useQuery<ProductListType>({
    queryKey: getProductDetails.getKey(id),
    queryFn: (): Promise<ProductListType> => getProductDetails(id),
  });

  return (
    <>
      <View style={styles.container}>
        <LoadingView {...{isLoading, error, refetch}}>
          {data ? (
            <>
              <HeaderProduct item={data} />
              <InfoProduct item={data} />
              <SizeProduct />
              <Pressable style={styles.button} onPress={() => {}}>
                <Text style={styles.btnText}>add to cart</Text>
              </Pressable>
            </>
          ) : null}
        </LoadingView>
      </View>
      <Header item={data} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  button: {
    width: '90%',
    backgroundColor: '#000',
    height: 48,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});
export default ProductDetails;
