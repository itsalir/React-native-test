import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ProductListType} from '../../../api/types';
import {isIOS} from '../../../utilities/Environment';
import {handleLike} from '../../ProductList/components/logicLike';

type Props = {
  item: ProductListType;
};

const HeaderProduct = ({item}: Props) => {
  const navigation = useNavigation();
  let islikedCache = item?.isLiked ? true : false;
  const [isliked, setIsliked] = useState<boolean>(islikedCache);

  const handleLikeReq = (_item: ProductListType) => {
    // call api for update like
    // I use state beacuse I don't have api I just updated state reason data
    // is props and not updated by cache in this page but in product list works fine
    // update cache of react query
    setIsliked(!isliked);
    handleLike(_item);
  };
  return (
    <ImageBackground
      source={{uri: item?.image}}
      resizeMode={'cover'}
      style={styles.containerBackground}>
      <View style={styles.containerIcon}>
        <Icon
          onPress={() => navigation.goBack()}
          name="chevron-back-outline"
          size={24}
        />
        <Icon
          onPress={() => handleLikeReq(item)}
          name={isliked ? 'heart' : 'heart-outline'}
          color={isliked ? 'red' : '#000'}
          size={24}
          testID={'like-icon'}
        />
      </View>
    </ImageBackground>
  );
};

export default HeaderProduct;

const styles = StyleSheet.create({
  containerBackground: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
    elevation: 1,
    shadowOpacity: 1,
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: isIOS() ? 50 : 20,
    marginHorizontal: 20,
  },
});
