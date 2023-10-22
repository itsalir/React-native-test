import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../pages/Splash';
import {isIOS} from '../utilities/Environment';
import ProductList from '../pages/ProductList';
import ProductDetails from '../pages/ProductDetails';
import BookmarkPage from '../pages/BookmarkPage';
import {RootStackParamList} from '../types/NavigationTypes';
const Stack = createNativeStackNavigator<RootStackParamList>();

const FullScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: isIOS() ? 'card' : 'modal',
        animation: 'none',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="BookmarkPage" component={BookmarkPage} />
    </Stack.Navigator>
  );
};

export default FullScreenStack;
