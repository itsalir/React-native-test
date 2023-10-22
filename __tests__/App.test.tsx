import 'react-native';
import React from 'react';
import App from '../App';
import {it} from '@jest/globals';
import {create, act} from 'react-test-renderer';

it('renders correctly', () => {
  act(() => {
    create(<App />);
  });
});
