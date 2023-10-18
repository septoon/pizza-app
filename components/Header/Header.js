import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import {  useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import ShoppingCart from '../../assets/img/shopping-cart.svg'
import { dark } from './HeaderDarkMode';

const selectCart = state => state.cart;
const selectCartData = createSelector(
  [selectCart],
  cart => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  })
);

export default function Header() {
  const { totalCount, totalPrice } = useSelector(selectCartData);
  const colorScheme = useColorScheme()

  return (
    <View style={colorScheme === 'light' ? styles.header : dark.header}>
      <Image style={styles.logo} source={require('../../assets/img/text-logo.png')} />
      <View style={styles.basket} >
        <Text style={styles.basketText}>{totalPrice} ₽</Text>
        <Text style={styles.basketText}>|</Text>
        <View style={styles.basketIconWrapper}>
          <ShoppingCart style={styles.basketIcon} />
          <Text style={styles.basketText}>{totalCount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '8%',
    shadowColor: '#222c50',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    zIndex: 999,
  },
  logo: {
    width: 161.91,
    height: 18,
    opacity: .6
  },
  basket: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fe5f1e',
    width: 130,
    height: 50,
    borderRadius: 10
  },
  basketIconWrapper: {
    flexDirection: 'row'
  },
  basketIcon: {
    width: 18,
    height: 18
  },
  basketText: {
    marginLeft: 5,
    alignItems: 'center',
    fontWeight: 700,
    color: '#fff'
  }
});
