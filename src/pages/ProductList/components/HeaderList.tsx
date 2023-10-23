import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/NavigationTypes';
import {ProductListType} from '../../../api/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  onChangeText: (text: string) => void;
  bookmark?: boolean;
  data?: ProductListType[];
};

const HeaderList = ({onChangeText, bookmark, data}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const hasAnyBookmarked = data?.some(it => it.isBookmark);
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.containerSafe, {paddingTop: insets.top}]}>
      <View style={styles.container}>
        {bookmark ? (
          <Icon
            onPress={() => navigation.goBack()}
            name="chevron-back-outline"
            size={24}
          />
        ) : (
          <Icon name="menu-outline" size={30} />
        )}
        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Search product"
            onChangeText={onChangeText}
            underlineColorAndroid="transparent"
          />
        </View>
        {!bookmark ? (
          <Icon
            onPress={() => navigation.navigate('BookmarkPage')}
            // style={styles.searchIcon}
            name={hasAnyBookmarked ? 'bookmark' : 'bookmark-outline'}
            size={20}
            color={hasAnyBookmarked ? 'red' : '#000'}
          />
        ) : (
          <View style={styles.bookmarkEmpty} />
        )}
      </View>
    </View>
  );
};

export default HeaderList;

const styles = StyleSheet.create({
  containerSafe: {
    backgroundColor: '#F4F4F4',
  },
  container: {
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    gap: 20,
    width: '100%',
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '800',
  },
  subTitle: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  containerView: {
    gap: 10,
  },
  searchSection: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  bookmarkEmpty: {
    width: '10%',
  },
});
