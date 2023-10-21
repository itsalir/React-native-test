import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProductListType} from '../../../api/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {handleLike} from './logicLike';
type Props = {
  item: ProductListType;
};

const ProductBox = ({item}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      key={item.id + item.title}
      onPress={() => navigation.navigate('ProductDetails', item)}
      activeOpacity={0.9}
      style={styles.container}>
      <Icon
        onPress={() => handleLike(item)}
        name={item?.isLiked ? 'heart' : 'heart-outline'}
        color={item?.isLiked ? 'red' : '#000'}
        size={24}
        style={[styles.icon]}
      />
      <Image
        style={styles.img}
        resizeMode={'contain'}
        source={{uri: item?.image}}
      />
      <Text style={styles.title}>{item?.title}</Text>
      <Text numberOfLines={1} style={styles.text}>
        {item?.text}
      </Text>
      <Text style={styles.price}>{`$${item?.price || 0}`}</Text>
    </TouchableOpacity>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: 160,
    backgroundColor: '#fff',
    flexGrow: 2,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  img: {
    height: 100,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  title: {
    marginTop: 10,
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  text: {
    color: '#7C7A7A',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 10,
  },
  price: {
    color: '#000',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 10,
  },
});
