import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, waitFor} from '@testing-library/react-native';
import Splash from '../src/pages/Splash';
import '@testing-library/jest-native/extend-expect';
import {fireEvent} from '@testing-library/react-native';

test('Splash page works and navigates to ProductList after animation', async () => {
  const {getByTestId} = render(
    <NavigationContainer>
      <Splash />
    </NavigationContainer>,
  );

  const lottieView = getByTestId('lottie-view');
  expect(lottieView).toBeTruthy();
  await waitFor(
    () => {
      fireEvent(lottieView, 'animationFinish', {nativeEvent: {}});
    },
    {timeout: 3000},
  );
});
