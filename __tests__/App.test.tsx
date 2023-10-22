import 'react-native';
import React from 'react';
import App from '../App';
import {it} from '@jest/globals';
import {create, act} from 'react-test-renderer';
import {waitFor} from '@testing-library/react-native';

it('renders correctly', () => {
  waitFor(
    () => {
      act(() => {
        create(<App />);
      });
    },
    {timeout: 300},
  );
});
