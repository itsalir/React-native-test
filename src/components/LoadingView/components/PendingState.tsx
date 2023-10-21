import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

// loading data
const PendingState = () => {
  return (
    <View style={styles.conatiner}>
      <ActivityIndicator size={42} />
    </View>
  );
};

export default PendingState;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
