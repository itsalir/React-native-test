import * as React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/contexts';
function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
}

export default App;
