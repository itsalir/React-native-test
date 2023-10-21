import {View, StyleSheet, Pressable, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ProductListType} from '../../api/types';
import HeaderProduct from './components/HeaderProduct';
import InfoProduct from './components/InfoProduct';
import SizeProduct from './components/SizeProduct';

const ProductDetails = () => {
  const item = useRoute().params as ProductListType;

  return (
    <View style={styles.container}>
      <HeaderProduct item={item} />
      <InfoProduct item={item} />
      <SizeProduct />
      <Pressable style={styles.button} onPress={() => {}}>
        <Text style={styles.btnText}>add to cart</Text>
      </Pressable>
    </View>
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
