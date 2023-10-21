import {View, Text, Button} from 'react-native';
import React from 'react';

type Props = {
  retry?: () => void;
  description: string;
};

/// handle showing error and refetch api
const RejectedState = ({retry, description}: Props) => {
  return (
    <View>
      <Button onPress={retry} title="retry" />
      <Text>{description}</Text>
    </View>
  );
};

export default RejectedState;
