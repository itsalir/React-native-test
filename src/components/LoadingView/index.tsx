import React from 'react';
import PendingState from './components/PendingState';
import RejectedState from './components/RejectedState';

type Props = {
  isLoading?: Boolean;
  error?: any;
  refetch?: () => void;
  children?: any;
};

const LoadingView = ({children, isLoading, error, refetch}: Props) => {
  console.log('error', error);

  if (isLoading) {
    return <PendingState />;
  }
  if (error) {
    return <RejectedState retry={refetch} description={error?.message} />;
  }
  return children;
};

export default LoadingView;
