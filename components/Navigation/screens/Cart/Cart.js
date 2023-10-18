import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View, Alert, Dimensions, ScrollView, Pressable, useColorScheme } from 'react-native';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearPizzaCartAC, removePizzaAC } from '../../../../redux/cart-reducer';
import { createSelector } from 'reselect';
import EmptyCartLogo from '../../../../assets/img/empty-cart-dark.svg'
import TrashIcon from '../../../../assets/img/trashIcon.svg'

import Form from './Form/Form';

import axios from 'axios';
import { styles } from './styles/CartStyles';
import { dark } from './styles/CartStylesDark';

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
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  let ordersCount = 0
  
  const sendOrder = async(orderType, orderItems, pizzas, pay) => {
    ordersCount += 1
    
    let message = `
        Заказ # ${ordersCount}
        ${orderType}
        ${pizzas.toString()}
        Сумма: ${totalPrice}
        Адрес Доставки: ${orderItems.address}
        Номер телефона: ${orderItems.phoneNumber}
        Комментарий: ${orderItems.comment}
        Способ оплаты: ${pay}
      `
    await axios.post ('https://api.telegram.org/bot6449386041:AAGzqG0r-R9AJFcY0EeV0vv6XBjFNDx_7xE/sendMessage', {
      chat_id: "-1001929441485",
      text: message
    }).then((res) => {
      onClickClearCart()
      setModalVisible(false)
    }).catch((err) => {
      console.warn(err)
    })
  }

  const dispatch = useDispatch();
  const { items, totalCount, totalPrice } = useSelector(selectCartData);

  const colorScheme = useColorScheme()

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

  const onClickRemovePizza = (pizzaObj) => {
    dispatch(removePizzaAC(pizzaObj));
  };
  const onClickClearCart = () => {
    dispatch(clearPizzaCartAC());
  };
  return (
    <View style={ colorScheme === 'light' ? styles.cartWrapper : dark.cartWrapper }>
      <View style={ styles.content }>
        <View style={ styles.containerCart }>
          <View style={styles.cart}>
            {items.length ? (
              <>
                <View style={styles.cartTop}>
                    <Pressable style={styles.cartClear} onPress={() => {
                      Alert.alert('Очистить корзину', 'Вы уверены, что хотите очистить корзину?', [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => dispatch(clearPizzaCartAC())},
                      ])
                    }}>
                      <TrashIcon style={styles.cartClearIcon} />
                      <Text style={styles.cartClearText}>Очистить корзину</Text>
                    </Pressable>
                </View>
                <ScrollView style={styles.contentItems}>
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
                        count={count}
                        result={result}
                        price={price}
                        onClickRemovePizza={onClickRemovePizza}
                        {...item}
                      />
                    );
                  })}
                </ScrollView>
                <View style={styles.cartBottom}>
                  <View style={styles.cartBottomDetails}>
                    <Text style={styles.cartTotalCount}>
                      {' '}
                      Всего пицц: <Text style={styles.cartTotalCountSum}>{totalCount} шт.</Text>{' '}
                    </Text>
                    <Text style={styles.cartTotalPrice}>
                      {' '}
                      Сумма заказа: <Text style={styles.cartTotalPriceSum}>{totalPrice} ₽</Text>{' '}
                    </Text>
                  </View> 
                  <View style={styles.payBtn}>
                    <Pressable style={styles.btnCartOrder} onPress={toggleModal}>
                      <Text style={styles.cartOrderBtnText}>Перейти к оформлению</Text>
                    </Pressable>
                    <Form countById={countById}
                          totalItems={items}
                          items={uniqueProducts} 
                          totalCount={totalCount} 
                          totalPrice={totalPrice} 
                          isModalVisible={isModalVisible} 
                          toggleModal={toggleModal}
                          sendOrder={sendOrder}
                    />
                  </View>
                </View>
              </>
            ) : (
              
              <View style={styles.emptyCart}>
                <Text style={colorScheme === 'light' ? styles.emptyCartTitle : dark.emptyCartTitle}>Корзина пустая</Text>
                <Text style={ colorScheme === 'light' ? styles.emptyCartText : dark.emptyCartText}>
                  Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу,
                  перейди на главную страницу.
                </Text>
                  
                <EmptyCartLogo style={styles.emptyCartLogo} /> 
                <Pressable style={styles.toMainBtn} onPress={() => {
                  navigation.navigate('Меню')}}>
                  <Text style={styles.backBtnText}>На главную</Text>
                </Pressable>
              </View>
             )}
          </View>
        </View>
      </View>
    </View>
  );
}
