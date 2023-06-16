import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../../../Header/Header';

export default function Cart({navigation}) {
  return (
    <View style={styles.cartWrapper}>
      <Button title='Назад' onPress={() => navigation.navigate('Catalog')} />
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
