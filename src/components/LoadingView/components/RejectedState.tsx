import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  retry?: () => void;
  description: string;
};

/// handle showing error and refetch api
const RejectedState = ({retry, description}: Props) => {
  return (
    <View style={styles.container}>
      <Button onPress={retry} title="retry" />
      <Text>{description}</Text>
    </View>
  );
};

export default RejectedState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
