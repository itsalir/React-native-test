import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Animated} from 'react-native';

const SizeProduct = () => {
  return (
    <>
      <Text style={styles.sizeText}>Size</Text>
      <Animated.FlatList
        data={size}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        horizontal
        keyExtractor={(item: string) => item}
        renderItem={({item}: {item: string}) => (
          <View style={styles.containerBox}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </>
  );
};

export default SizeProduct;

const styles = StyleSheet.create({
  containerBox: {
    width: 50,
    padding: 10,
    height: 40,
    gap: 20,
    borderColor: '#D8D8DD',
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#828282',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  sizeText: {
    marginTop: 20,
    marginHorizontal: 20,
    color: '#000',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  list: {
    marginTop: 20,
    alignSelf: 'flex-end',
    width: '100%',
    paddingHorizontal: 20,
  },
  listContent: {
    gap: 10,
  },
});

const size = ['42', '43', '44', '45', '46'];
