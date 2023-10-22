import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProductListType} from '../../../api/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {handleLike} from './logicLike';
import {RootStackParamList} from '../../../types/NavigationTypes';
import {useMutation} from '@tanstack/react-query';
import {updateBookMark} from '../../../api';
type Props = {
  item: ProductListType;
};

const ProductBox = ({item}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {mutate} = useMutation({
    mutationFn: (_item: ProductListType) => updateBookMark(_item.id, _item),
    onError(error, _item) {
      handleLike(_item);
    },
  });
  const handleLikeReq = (_item: ProductListType) => {
    mutate({..._item, isBookmark: !_item.isBookmark});
    handleLike(_item);
  };
  return (
    <TouchableOpacity
      key={item.id + item.title}
      onPress={() => navigation.navigate('ProductDetails', {id: item.id})}
      activeOpacity={0.9}
      style={styles.container}>
      <Image
        style={styles.img}
        resizeMode={'contain'}
        source={{uri: item?.image}}
      />
      <Text style={styles.title}>{item?.title}</Text>
      <Text numberOfLines={1} style={styles.text}>
        {item?.text}
      </Text>
      <View style={styles.bookConatiner}>
        <Text style={styles.price}>{`$${item?.price || 0}`}</Text>
        <Icon
          onPress={() => handleLikeReq(item)}
          name={item?.isBookmark ? 'bookmark' : 'bookmark-outline'}
          color={item?.isBookmark ? 'red' : '#000'}
          size={24}
          style={[styles.icon]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  container: {
    height: 230,
    width: 170,
    flexGrow: 1,
    backgroundColor: '#fff',
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
  },
  bookConatiner: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
