import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProductListType} from '../../../api/types';

type Props = {
  item: ProductListType;
};

const InfoProduct = ({item}: Props) => {
  console.log('item', item.image);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.flex1}>
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={2} style={styles.text}>
            {item.text}
          </Text>
        </View>
        <Text style={styles.price}>{`$${item.price}`}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.separator} />
    </>
  );
};

export default InfoProduct;

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '800',
  },
  text: {
    marginTop: 15,
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  price: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  separator: {
    marginTop: 20,
    backgroundColor: '#D8D8DD',
    height: 1,
    width: '90%',
    alignSelf: 'center',
  },
  container: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  description: {
    color: '#000',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  flex1: {
    flex: 1,
  },
});
