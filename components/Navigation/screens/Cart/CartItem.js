import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import { styles } from './CartItemStyles';

export default function CartItem({
  id,
  image,
  title,
  activeSize,
  activePrice,
  price,
  count,
  onClickRemovePizza,
  calculatePrice,
}) {
  const onRemovePizza = () => {
    const pizzaObj = {
      pizzaId: id,
      pizzaSize: activeSize,
    };
    onClickRemovePizza(pizzaObj);
  };
  return (
    <View style={styles.cartItem}>
      <View style={styles.cartItemImg}>
        <Image style={styles.pizzaBlockImage} source={require('../../../../assets/img/pepperoni.png')} />
      </View>
      <View style={styles.cartItemInfo}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.sizeText}>{activeSize}</Text>
      </View>
      <View style={styles.cartItemCount}>
        <View>
        </View>
        <Text style={styles.cartItemCountText}>{count} шт.</Text>
        <View>
        </View>
      </View>
      <View style={styles.cartItemPrice}>
        <Text style={styles.priceText}>{price}₽</Text>
      </View>
      <View style={styles.cartItemRemove}>
        <TouchableHighlight onPress={() => {
          const pizzaObj = {
            pizzaId: id,
            pizzaSize: activeSize,
          };
          onClickRemovePizza(pizzaObj);
        }}>
          <Image source={require('../../../../assets/img/close.png')} style={styles.closeCart} />
        </TouchableHighlight>
      </View>
    </View>
  );
}
