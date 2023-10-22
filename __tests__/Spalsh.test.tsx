import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import Splash from '../src/pages/Splash';
import '@testing-library/jest-native/extend-expect';
import {fireEvent} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
const queryClient = new QueryClient();

test('Splash page works and navigates to ProductList after animation', () => {
  const {getByTestId} = render(
    <QueryClientProvider client={queryClient}>
      <Splash />
    </QueryClientProvider>,
  );

  const lottieView = getByTestId('lottie-view');
  expect(lottieView).toBeTruthy();

  waitFor(
    () => {
      fireEvent(lottieView, 'animationFinish', {nativeEvent: {}});
    },
    {timeout: 3000},
  );
});
