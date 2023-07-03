import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View, Alert } from 'react-native';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearPizzaCartAC, removePizzaAC } from '../../../../redux/cart-reducer';
import { createSelector } from 'reselect';
import EmptyCartLogo from '../../../../assets/img/empty-cart.svg'

const selectCart = state => state.cart;
const selectCartData = createSelector(
  [selectCart],
  cart => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  })
);

export default function Cart({ navigation }) {
  const dispatch = useDispatch();
  const { items, totalCount, totalPrice } = useSelector(selectCartData);

  const backBtnStyle = items.length ? styles.cartBackBtn : [ styles.cartBackBtn, styles.empty ];

  const uniqueProducts = items.reduce((acc, current) => {
    const isDuplicate = acc.find(
      (item) => item.id === current.id && item.activeSize === current.activeSize,
    );
    if (!isDuplicate) {
      acc.push(current);
    }
    return acc;
  }, []);

  const countById = (items, id, activeSize) => {
    return items.reduce((count, i) => {
      if (i.id === id && i.activeSize === activeSize) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const [isOrder, setIsOrder] = useState(false);

  const onClickRemovePizza = (pizzaObj) => {
    dispatch(removePizzaAC(pizzaObj));
  };
  const onClickClearCart = () => {
    dispatch(clearPizzaCartAC());
  };
  return (
    <View style={ styles.cartWrapper }>
      <View style={ styles.content }>
        <View style={ styles.containerCart }>
          {isOrder && (
            <Form
              setIsOrder={setIsOrder}
              onClickClearCart={onClickClearCart}
              countById={countById}
              totalItems={items}
              items={uniqueProducts}
              totalCount={totalCount}
              totalPrice={totalPrice}
            />
          )}
          <View style={styles.cart}>
            {items.length ? (
              <>
                <View style={styles.cartTop}>
                  <Text style={styles.contentTitle}>
                    {' '}
                    Корзина
                  </Text>
                  <Button
                    style={styles.cartClear}
                    onPress={() => {
                      Alert.alert('Очистить корзину', 'Вы уверены, что хотите очистить корзину?', [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => dispatch(clearPizzaCartAC())},
                      ])
                    }} title="Очистить корзину" />
                </View>
                <View style={styles.contentItems}>
                  {uniqueProducts.map((item, index) => {
                    const result = items.filter(
                      (elem) => elem.id === item.id && elem.activeSize === item.activeSize,
                    );
                    let price = 0;
                    const count = countById(items, item.id, item.activeSize);

                    const calculatePrice = (result) => {
                      let price = 0;
                      result.forEach((item) => (price += parseInt(item.activePrice) + 40));
                      return price;
                    };                    

                    return (
                      <CartItem
                        key={index}
                        calculatePrice={calculatePrice}
                        count={count}
                        price={price}
                        onClickRemovePizza={onClickRemovePizza}
                        {...item}
                      />
                    );
                  })}
                </View>
                <View style={styles.cartBottom}>
                  <View style={styles.cartBottomDetails}>
                    <Text style={styles.cartTotalCount}>
                      {' '}
                      Всего пицц: <Text>{totalCount} шт.</Text>{' '}
                    </Text>
                    <Text style={styles.cartTotalPrice}>
                      {' '}
                      Сумма заказа: <Text>{totalPrice} ₽</Text>{' '}
                    </Text>
                  </View>
                  <View style={styles.cartBottomButtons}>
                      <Button style={backBtnStyle} onPress={() => {
                        navigation.navigate('Catalog')
                      }} title='Вернуться назад' />
                    <View style={styles.payBtn}>
                      <Button style={styles.btnOrder} onPress={() => setIsOrder(true)} title='Заказать' />
                    </View>
                  </View>
                </View>
              </>
            ) : (
              
              <View style={styles.emptyCart}>
                <Text style={styles.emptyCartTitle}>Корзина пустая</Text>
                <Text style={styles.emptyCartText}>
                  Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу,
                  перейди на главную страницу.
                </Text>
                  
                <EmptyCartLogo style={styles.emptyCartLogo} /> 
                <Button style={styles.backBtnStyle} onPress={() => navigation.navigate('Catalog')} title='Вернуться назад' />
              </View>
             )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
