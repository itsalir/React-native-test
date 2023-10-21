import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FullScreenStack from './FullScreenStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <FullScreenStack />
      {/* handle here AlertView and toast and other   */}
    </NavigationContainer>
  );
};

export default RootNavigator;
