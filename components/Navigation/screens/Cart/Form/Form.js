import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import email from 'react-native-email';
import { Button, Image, Linking, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { CheckBox } from 'react-native-elements'

import mask from '../../../../../assets/other/mask';

const Form = ({ items, countById, totalItems, onClickClearCart, totalPrice, isModalVisible, toggleModal }) => {
  const form = useRef()

  const [address, setAddress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [body, setBody] = useState({});

  const [isSelected, setSelection] = useState(false);

  const [checkValue, setCheckValue] = useState('');
   
  const onAddressChange = (value) => {
    setAddress(value);
  };

  const onPhoneNumChange = (value) => {
    setPhoneNum(value);
  };



  const sendEmail = (e) => {

    e.preventDefault()
    
    setBody({
      "Адрес": address,
      "Номер телефона": phoneNum
    })

    emailjs.sendForm('gmail', 'template_u0d7yw8', form.current, 'puDAdUDMwIkZMM87m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
  }

  const [ loading, setLoading ] = useState(false);


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
            <Formik initialValues={{ email: '' }}
              onSubmit={values => console.log(values)} ref={form} style={styles.formTotal}>
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
                    onChangeText={onAddressChange}
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
                    onChangeText={onPhoneNumChange}
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
                    value={isSelected}
                    onValueChange={setSelection}
                  />

                  </View>
                  <View style={styles.paymentMethod}>
                  <CheckBox
                    center
                    title='Карта'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value={isSelected}
                    onValueChange={setSelection}
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
                    console.log(body)
                  }, 500);
                }}/>
                />
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
