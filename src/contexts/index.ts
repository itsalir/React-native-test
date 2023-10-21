import {QueryClient} from '@tanstack/query-core';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 1000,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export {queryClient};
