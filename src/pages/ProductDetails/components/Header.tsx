import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ProductListType} from '../../../api/types';
import {isIOS} from '../../../utilities/Environment';
import {useMutation} from '@tanstack/react-query';
import {updateBookMark} from '../../../api';
import {handleBookmark} from '../../ProductList/components/logicBookmark';

type Props = {
  item?: ProductListType;
};

const Header = ({item}: Props) => {
  const navigation = useNavigation();

  const {mutate} = useMutation({
    mutationFn: (_item: ProductListType) => updateBookMark(_item.id, _item),
    onError(error, _item) {
      handleBookmark(_item);
    },
  });
  const handleBookmarkReq = (_item: ProductListType) => {
    mutate({..._item, isBookmark: !_item.isBookmark});
    handleBookmark(_item);
  };
  return (
    <View style={styles.containerIcon}>
      <Icon
        onPress={() => navigation.goBack()}
        name="chevron-back-outline"
        size={24}
      />

      {item ? (
        <Icon
          onPress={() => handleBookmarkReq(item)}
          name={item?.isBookmark ? 'bookmark' : 'bookmark-outline'}
          color={item?.isBookmark ? 'red' : '#000'}
          size={24}
          testID={'bookmark-icon'}
        />
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerBackground: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
    elevation: 1,
    shadowOpacity: 1,
  },
  containerIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: isIOS() ? 50 : 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#ffffff88',
  },
});
