import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductListType} from '../../../api/types';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  data?: ProductListType[];
  onChangeText: (text: string) => void;
};

const HeaderList = ({data, onChangeText}: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Icon name="menu-outline" size={30} />
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
      </View>
      <View style={styles.container}>
        <View style={styles.containerView}>
          <Text style={styles.title}>Sneakers</Text>
          <Text style={styles.subTitle}>
            {data?.length || 0} products found
          </Text>
        </View>
        <Icon name="funnel-outline" size={24} />
      </View>
    </SafeAreaView>
  );
};

export default HeaderList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    gap: 20,
    zIndex: 999,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
