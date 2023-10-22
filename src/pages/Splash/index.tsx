import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {ProductListType} from '../../api/types';
import {getProductList} from '../../api';
const Animation = require('../../assets/json/Animation.json');

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  useQuery<ProductListType[]>({
    queryKey: getProductList.getKey(),
    queryFn: (): Promise<ProductListType[]> => getProductList(),
  });
  return (
    <LottieView
      style={styles.container}
      source={Animation}
      autoPlay
      loop={false}
      onAnimationFinish={() => navigation.replace('ProductList')}
      cacheComposition={true}
      renderMode={'HARDWARE'}
      enableMergePathsAndroidForKitKatAndAbove={true}
      testID="lottie-view"
    />
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
