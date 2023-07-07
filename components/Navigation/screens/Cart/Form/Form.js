import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { CheckBox } from 'react-native-elements'

import mask from '../../../../../assets/other/mask';

const Form = ({ items, countById, totalItems, onClickClearCart, totalPrice, isModalVisible, toggleModal }) => {

  const form = React.forwardRef();

  const [selectedValue, setSelectedValue] = useState('Наличные');

  const [address, setAddress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const handlePhoneNumChange = (value) => {
    setPhoneNum(value);
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


  return (
    <Modal
      visible={isModalVisible}
      style={styles.modal}
      onSwipeComplete={toggleModal}
      swipeDirection="down"
      animationType="slide"
      onBackdropPress={toggleModal}>
      <View style={styles.emailForm}>
        <Button title="< Назад" onPress={toggleModal} />

        <View style={styles.emailFormWrapper}>
          <Text style={styles.formTitle}>Ваш заказ:</Text>
          <Formik onSubmit={sendEmail} style={styles.formTotal}>
            <View>
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
                <Text>Введите ваш адрес:</Text>
                <View style={styles.inpValid}>
                  <TextInput
                    required
                    style={styles.orderInput}
                    value={address}
                    onChangeText={handleAddressChange}
                    name="address"
                    placeholder="ул. Горького, 54"
                  />
                  {!address && <Text>Поле не заполнено</Text>}
                </View>
                <Text>Введите ваш номер телефона:</Text>
                <View style={styles.inpValid}>
                  <TextInput
                    required
                    style={styles.orderInput}
                    value={phoneNum}
                    onChangeText={handlePhoneNumChange}
                    placeholder="+7 (978) 704 88 06"
                    name="telephone"
                    keyboardType="numeric"
                  />
                  {!phoneNum && <Text>Поле не заполнено</Text>}
                </View>
                <Text>Спооб оплаты:</Text>
                <View style="payment" name="checkbox">
                  <View style="payment_method">
                  <CheckBox
                    center
                    title='Наличные'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={selectedValue === 'Наличные'}
                    onPress={() => setSelectedValue('Наличные')}
                  />

                  </View>
                  <View style={styles.paymentMethod}>
                  <CheckBox
                    center
                    title='Карта'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={selectedValue === 'Карта'}
                    onPress={() => setSelectedValue('Карта')}
                  />
                  </View>
                </View>
              </View>
              <Button
                type="submit"
                title="Отправить"
                disabled={!address}
                style={styles.btnOrder}
                onPress={() => {
                  setTimeout(() => {
                    onClickClearCart();
                    console.log(`${address}, ${phoneNum}, ${selectedValue}`)
                  }, 500);
                }}/>
            </View>
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
