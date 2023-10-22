/* eslint-disable no-undef */
require('react-native-gesture-handler/jestSetup');

global.window = global;

global.__reanimatedWorkletInit = jest.fn();

const mockSafeAreaContext = require('react-native-safe-area-context/jest/mock');

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext.default);
// jest.mock('@react-navigation/native', () => ({
//   useNavigation: () => ({
//     navigate: jest.fn(),
//   }),
// }));
