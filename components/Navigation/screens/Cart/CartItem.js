import { Image, Pressable, StyleSheet, Text, TouchableHighlight, View, useColorScheme } from 'react-native';
import React from 'react';
import { styles } from './styles/CartItemStyles';

import TrashIcon from '../../../../assets/img/trashIcon.svg'
import { dark } from './styles/CartItemStylesDark';

export default function CartItem({
  id,
  image,
  title,
  activeSize,
  result,
  price,
  count,
  onClickRemovePizza,
}) {
  const colorScheme = useColorScheme();
  result.forEach(item => price += parseInt(item.activePrice) + 40)
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
      <Image source={{
          uri: image
        }} style={styles.pizzaBlockImage}  />
      </View>
      <View style={styles.cartItemInfo}>
        <Text style={colorScheme === 'light' ? styles.titleText : dark.titleText}>{title}</Text>
        <Text style={styles.sizeText}>{activeSize}</Text>
      </View>
      <View style={styles.cartItemCount}>
        <View>
        </View>
        <Text style={colorScheme === 'light' ? styles.cartItemCountText : dark.cartItemCountText}>{count} шт.</Text>
        <View>
        </View>
      </View>
      <View style={styles.cartItemPrice}>
        <Text style={colorScheme === 'light' ? styles.priceText : dark.priceText}>{price}₽</Text>
      </View>
      <View style={styles.cartItemRemove}>
        <Pressable style={styles.closeCart} onPress={() => {
          const pizzaObj = {
            pizzaId: id,
            pizzaSize: activeSize,
          };
          onClickRemovePizza(pizzaObj);
        }}>
          <TrashIcon />
        </Pressable>
      </View>
    </View>
  );
}
