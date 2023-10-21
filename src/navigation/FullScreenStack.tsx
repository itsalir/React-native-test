import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../pages/Splash';
import {isIOS} from '../utilities/Environment';
import ProductList from '../pages/ProductList';
import ProductDetails from '../pages/ProductDetails';
const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
};

export default FullScreenStack;
