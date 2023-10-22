import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  message: string;
};

const EmptyList = ({message}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#000',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'capitalize',
  },
});
