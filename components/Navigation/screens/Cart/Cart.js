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

  // const { isDark } = useSelector(({ dark }) => ({
  //   isDark: dark.isDark,
  // }));

  const backBtnStyle = items.length ? 'cart_back_btn' : 'cart_back_btn empty';

  // Создайте новый массив уникальных элементов, используя метод reduce().
  const uniqueProducts = items.reduce((acc, current) => {
    // Проверяем, есть ли элемент с таким же id в массиве acc
    const isDuplicate = acc.find(
      (item) => item.id === current.id && item.activeSize === current.activeSize,
    );
    // Если элемент не найден, добавляем его в массив acc.
    if (!isDuplicate) {
      acc.push(current);
    }
    // Возвращаем массив acc на каждой итерации
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
          <View style="cart">
            {items.length ? (
              // Если в корзине что-то есть
              <>
                <View style="cart__top">
                  <Text style="content__title">
                    {' '}
                    <img src={basket} style="bask svg" alt="basket" /> Корзина
                  </Text>
                  <View
                    style="cart__clear"
                    onClick={() => {
                      let popup = window.confirm('Вы уверены, что хотите очистить корзину?');
                      popup && dispatch(clearPizzaCartAC());
                    }}>
                    <img src={trash} alt="trash" />
                    <Text>Очистить корзину</Text>
                  </View>
                </View>
                <View style="content__items">
                  {uniqueProducts.map((item, index) => {
                    const result = items.filter(
                      (elem) => elem.id === item.id && elem.activeSize === item.activeSize,
                    );
                    let price = 0;
                    const count = countById(items, item.id, item.activeSize);

                    return (
                      <CartItem
                        key={index}
                        result={result}
                        count={count}
                        price={price}
                        onClickRemovePizza={onClickRemovePizza}
                        {...item}
                      />
                    );
                  })}
                </View>
                <View style="cart__bottom">
                  <View style="cart__bottom-details">
                    <Text>
                      {' '}
                      Всего пицц: <b>{totalCount} шт.</b>{' '}
                    </Text>
                    <Text>
                      {' '}
                      Сумма заказа: <b>{totalPrice} ₽</b>{' '}
                    </Text>
                  </View>
                  <View style="cart__bottom-buttons">
                    <NavLink
                      to="/catalog"
                      style="cart_bottom"
                      onClick={() => dispatch(toggleIsActiveAC(true))}>
                      <Button style={backBtnStyle} title='Вернуться назад' />
                    </NavLink>
                    <View style="button pay-btn cart_bottom">
                      <Button style={styles.btnOrder} onPress={() => setIsOrder(true)} title='Заказать' />
                    </View>
                  </View>
                </View>
              </>
            ) : (
              // Если корзина пустая
              <View style="empty_cart">
                <Text>Корзина пустая</Text>
                <Text>
                  Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу,
                  перейди на главную страницу.
                </Text>
                {isDark ? (
                  <Image src={emptyCartDark} alt="empty-cart-logo" style="empty-cart-logo" />
                ) : (
                  <Image src={emptyCart} alt="empty-cart-logo" style="empty-cart-logo" />
                )}
                <Image source={require('../../../../assets/img/empty-cart.svg')} style="empty-cart-logo" /> 
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
