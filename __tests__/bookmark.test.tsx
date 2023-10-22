import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HeaderProduct from '../src/pages/ProductDetails/components/HeaderProduct';
import {ProductListType} from '../src/api/types';
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
test('toggles the "like" state when the icon is pressed', () => {
  const mockItem: ProductListType = {
    createdAt: '2023-10-20T08:00:34.323Z',
    title: 'test',
    price: '123',
    description: 'string',
    text: 'string',
    size: [],
    id: '1',
    image: 'https://example.com/image.jpg',
    isLiked: false,
  };

  const {getByTestId} = render(<HeaderProduct item={mockItem} />);

  const likeIcon = getByTestId('bookmark-icon');

  expect(likeIcon.props.style[0].color).toBe('#000');

  fireEvent.press(likeIcon);

  expect(likeIcon.props.style[0].color).toBe('red');

  fireEvent.press(likeIcon);

  expect(likeIcon.props.style[0].color).toBe('#000');
});
