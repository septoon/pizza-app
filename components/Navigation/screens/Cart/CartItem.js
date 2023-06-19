import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CartItem({
  id,
  image,
  title,
  activeSize,
  activePrice,
  price,
  count,
  onClickRemovePizza,
  result,
}) {
  result.forEach((item) => (price += parseInt(item.activePrice) + 40));
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
        <img style={styles.pizzaBlockImage} src={image} alt={title} />
      </View>
      <View style={styles.cartItemInfo}>
        <Text>{title}</Text>
        <Text>{activeSize}</Text>
      </View>
      <View style={styles.cartItemCount}>
        <View>
          <img src={minus} style="svg minus" alt="minus" />
        </View>
        <Text>{count}шт.</Text>
        <View>
          <img src={plus} style="svg" alt="plus" />
        </View>
      </View>
      <View style={styles.cartItemPrice}>
        <Text>{price}₽</Text>
      </View>
      <View style={styles.cartItemRemove}>
        <View onClick={onRemovePizza}>
          <img src={closeCart} style="close-cart svg" alt="closeCart" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
