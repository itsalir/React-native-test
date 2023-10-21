import React from 'react';
import {render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ProductList from '../src/pages/ProductList';

const queryClient = new QueryClient();

it('renders the ProductList component', () => {
  const {toJSON} = render(
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
