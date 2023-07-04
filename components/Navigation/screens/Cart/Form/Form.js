import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import mask from '../../../../../assets/other/mask';

const Form = ({ items, countById, totalItems, onClickClearCart, totalPrice, isModalVisible, toggleModal }) => {
  const form = useRef();
  const inputTel = useRef();

  const [address, setAddress] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const [value, setValue] = useState('');

  function changeValue(e) {
    setValue(e.target.value);
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumChange = (event) => {
    setPhoneNum(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_u0d7yw8', form.current, 'ekXJl3cQ3snFLGpWZ').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  React.useEffect(() => {
    mask(inputTel);
  }, []);

  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
      onSwipeComplete={toggleModal}
      swipeDirection="down"
      onBackdropPress={toggleModal}>
      <View style={styles.emailForm}>
        <Button title="Назад!!" onPress={toggleModal} />

        <View style={styles.emailFormWrapper}>
          <Text style={styles.formTitle}>Ваш заказ:</Text>
          <Formik ref={form} onSubmit={sendEmail} style={styles.formTotal}>
            <View style={styles.orderListWrapper}>
              {items.map((i) => {
                const count = countById(totalItems, i.id, i.activeSize);
                return (
                  <TextInput
                    key={i.id}
                    style={styles.hiddenInput}
                    name={i.id}
                    value={`${i.title} | ${i.activeSize} | ${i.activePrice} ₽ | x ${count}шт.`}
                  />
                );
              })}
            </View>
            <View style={styles.orderInputsWrapper}>
              <TextInput
                style={styles.hiddenInput}
                type="text"
                name="message"
                value={`На сумму: ${totalPrice} ₽`}
              />
              <label>Введите ваш адрес:</label>
              <View style={styles.inpValid}>
                <TextInput
                  required
                  style={styles.orderInput}
                  onChangeText={handleAddressChange}
                  name="address"
                  placeholder="ул. Горького, 54"
                />
                {!address && <p>Поле не заполнено</p>}
              </View>
              <label>Введите ваш номер телефона:</label>
              <View style={styles.inpValid}>
                <TextInput
                  required
                  style={styles.orderInput}
                  onChangeText={handlePhoneNumChange}
                  ref={inputTel}
                  placeholder="+7 (978) 704 88 06"
                  name="telephone"
                  keyboardType="numeric"
                />
                {!phoneNum && <p>Поле не заполнено</p>}
              </View>
              <Text>Спооб оплаты:</Text>
              <View style="payment" name="checkbox">
                <View style="payment_method">
                  <TextInput
                    type="radio"
                    onChange={changeValue}
                    value="Наличные"
                    name="cash"
                    id="cash"
                    checked={value === 'Наличные' ? true : false}
                  />{' '}
                  <Text style={styles.labelPay} for="cash">
                    Наличные
                  </Text>
                </View>
                <View style={styles.paymentMethod}>
                  <TextInput
                    type="radio"
                    onChange={changeValue}
                    value="Карта"
                    name="cart"
                    id="cart"
                    checked={value === 'Карта' ? true : false}
                  />{' '}
                  <Text style={styles.labelPay} for="cart">
                    Карта
                  </Text>
                </View>
              </View>
            </View>
            <Button
              type="submit"
              title="Отправить"
              disabled={!address}
              style={styles.btnOrder}
              onClick={() => {
                setTimeout(() => {
                  onClickClearCart();
                  setIsOrder(false);
                }, 500);
              }}/>
          </Formik>
        </View>
      </View>
    </Modal>
  );
};

export default Form;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    paddingTop: 100,
  },
  emailForm: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
