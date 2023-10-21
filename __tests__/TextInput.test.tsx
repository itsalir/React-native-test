import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HeaderList from '../src/pages/ProductList/components/HeaderList';

test('renders the HeaderList component with a TextInput', () => {
  const onChangeTextMock = jest.fn();
  const {getByPlaceholderText} = render(
    <HeaderList data={[]} onChangeText={onChangeTextMock} />,
  );

  const searchInput = getByPlaceholderText('Search product');
  fireEvent.changeText(searchInput, 'Sample Text');

  expect(onChangeTextMock).toHaveBeenCalledWith('Sample Text');
});

it('minimum props', () => {
  const onChangeTextMock = jest.fn();
  const {toJSON} = render(
    <HeaderList data={[]} onChangeText={onChangeTextMock} />,
  );

  expect(toJSON()).toMatchSnapshot();
});
