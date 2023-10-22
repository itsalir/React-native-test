import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {ProductListType} from '../../../api/types';
import {isIOS} from '../../../utilities/Environment';

type Props = {
  item: ProductListType;
};

const HeaderProduct = ({item}: Props) => {
  return (
    <ImageBackground
      source={{uri: item?.image}}
      resizeMode={'cover'}
      style={styles.containerBackground}
    />
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
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#ffffff88',
  },
});
