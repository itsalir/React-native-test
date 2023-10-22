import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {ProductListType} from '../src/api/types';
import Header from '../src/pages/ProductDetails/components/Header';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
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
    isBookmark: false,
  };
  const queryClient = new QueryClient();

  const {getByTestId} = render(
    <QueryClientProvider client={queryClient}>
      <Header item={mockItem} />
    </QueryClientProvider>,
  );
  waitFor(
    () => {
      const likeIcon = getByTestId('bookmark-icon');

      expect(likeIcon.props.style[0].color).toBe('#000');

      fireEvent.press(likeIcon);

      expect(likeIcon.props.style[0].color).toBe('red');

      fireEvent.press(likeIcon);

      expect(likeIcon.props.style[0].color).toBe('#000');
    },
    {timeout: 3000},
  );
});
