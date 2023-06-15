import React from 'react'
import { StyleSheet } from 'react-native';

export default function Cart() {
  return (
    <View style={styles.cartWrapper}>
      <Text>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cartWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
