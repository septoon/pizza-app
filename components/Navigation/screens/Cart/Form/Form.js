import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import email from 'react-native-email';
import { Button, Image, Linking, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { CheckBox } from 'react-native-elements'

import mask from '../../../../../assets/other/mask';

const Form = ({ items, countById, totalItems, sendOrder, totalPrice, isModalVisible, toggleModal }) => {

  const [isSelected, setSelection] = useState(false);

  const pizzasList = items.map((i) => {
    const count = countById(totalItems, i.id, i.activeSize);
    const value = `${i.title} | ${i.activeSize} | ${i.activePrice} ₽ | x ${count}шт.`
    return value
  })

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
            <Formik initialValues={{ price: `На сумму: ${totalPrice} ₽`, address: '', phoneNumber: '', checked: [] }}
              onSubmit={values => sendOrder(values, pizzasList.toString())} style={styles.formTotal}>
                {(props) => (
                  <>
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
                        value={props.values.price}
                      />
                      <Text>Введите ваш адрес:</Text>
                      <View style={styles.inpValid}>
                        <TextInput
                          required
                          style={styles.orderInput}
                          value={props.values.address}
                          onChangeText={props.handleChange('address')}
                          name="address"
                          placeholder="ул. Горького, 54"
                        />
                      </View>
                      <Text>Введите ваш номер телефона:</Text>
                      <View style={styles.inpValid}>
                        <TextInput
                          required
                          style={styles.orderInput}
                          value={props.values.phoneNumber}
                          onChangeText={props.handleChange('phoneNumber')}
                          placeholder="+7 (978) 704 88 06"
                          name="telephone"
                          keyboardType="numeric"
                        />
                      </View>
                      <Text>Спооб оплаты:</Text>
                      <View style="payment" name="checkbox">
                        <View style="payment_method">
                        <CheckBox
                          title='Наличные'
                          checkedIcon='dot-circle-o'
                          uncheckedIcon='circle-o'
                          value={props.values.cash}
                          onValueChange={setSelection}
                        />

                        </View>
                        <View style={styles.paymentMethod}>
                        <CheckBox
                          title='Карта'
                          checkedIcon='dot-circle-o'
                          uncheckedIcon='circle-o'
                          value={props.values.cash}
                          onValueChange={setSelection}
                        />
                        </View>
                      </View>
                    </View>
                    <Button
                      type="submit"
                      title="Отправить"
                      style={styles.btnOrder}
                      onPress={props.handleSubmit}/>
                  </>
                )}
              
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
