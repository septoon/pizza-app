import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart({ navigation }) {
  const dispatch = useDispatch();

  const { items, totalCount, totalPrice } = useSelector(({ cart }) => ({
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));

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
                  <View
                    style={styles.cartClear}
                    onClick={() => {
                      let popup = window.confirm('Вы уверены, что хотите очистить корзину?');
                      popup && dispatch(clearPizzaCartAC());
                    }}>
                    
                    <Text>Очистить корзину</Text>
                  </View>
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
                      Всего пицц: <b>{totalCount} шт.</b>{' '}
                    </Text>
                    <Text style={styles.cartTotalPrice}>
                      {' '}
                      Сумма заказа: <b>{totalPrice} ₽</b>{' '}
                    </Text>
                  </View>
                  <View style={styles.cartBottomButtons}>
                      <Button style={backBtnStyle} onPress={() => {
                        dispatch(toggleIsActiveAC(true))
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
                  <Image source={require('../../../../assets/img/logo.png')} style={styles.emptyCartLogo} />
                <Image source={require('../../../../assets/img/empty-cart.svg')} style={styles.emptyCartLogo} /> 
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
