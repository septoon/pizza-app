import React, { useEffect, useRef, useState } from 'react';
import { Button, Image, Linking, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper'
import BackArrowBtn from '../../../../../assets/img/backArrow.svg'

import mask from '../../../../../assets/other/mask';
import SlideButton from './SlideButton';

const Form = ({ items, countById, totalItems, sendOrder, totalPrice, isModalVisible, toggleModal }) => {

  const [payValue, setValue] = React.useState('Наличные');
  const [activeMode, setActiveMode] = useState(false)

  const toggleMode = () => {
    activeMode ? setActiveMode(false) : setActiveMode(true);
  };
  
  const pizzasList = items.map((i) => {
    const count = countById(totalItems, i.id, i.activeSize);
    const value = `${i.title} | ${i.activeSize} | ${i.activePrice} ₽ | x ${count}шт.`
    return value
  })

  return (
    <Modal
      presentationStyle="pageSheet"
      visible={isModalVisible}
      style={styles.modal}
      onSwipeComplete={toggleModal}
      swipeDirection="down"
      animationType="slide"
      onBackdropPress={toggleModal}>
      <View style={styles.emailForm}>
        <Pressable type="submit" style={styles.formBackBtn} onPress={toggleModal}>
          <Text style={styles.formBackBtnText}>Отменить</Text>
        </Pressable>
        <SlideButton toggleMode={toggleMode} activeMode={activeMode} />
        <View style={styles.emailFormWrapper}>
          <Text style={styles.formTitle}>Ваш заказ:</Text>
            <Formik initialValues={{ price: `На сумму: ${totalPrice} ₽`, address: '', phoneNumber: '+7 ', comment: '' }}
              onSubmit={values => sendOrder(values, pizzasList.toString(), payValue)} style={styles.formTotal}>
                {(props) => (
                  <>
                    <ScrollView style={styles.orderListWrapper}>
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
                    </ScrollView>
                    {
                      !activeMode ? 
                      (
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
                          maxLength={13}
                        />

                      </View>
                      <Text>Добавьте комментарий:</Text>
                      <View style={styles.inpValid}>
                        <TextInput
                          required
                          style={styles.orderInput}
                          value={props.values.comment}
                          onChangeText={props.handleChange('comment')}
                          name="comment"
                          placeholder="Например: заезд, номер подъезда..."
                        />
                      </View>
                      <Text>Спооб оплаты:</Text>
                      <View style="payment" name="checkbox">
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={payValue}>
                          <RadioButton.Item label="Наличные" value="Наличные" />
                          <RadioButton.Item label="Карта" value="Карта" />
                        </RadioButton.Group>
                      </View>
                    </View>

                      ) :
                      (
                        <View>
                          <Text>Empty...</Text>
                        </View>
                      )
                    }
                    <Pressable type="submit" style={styles.btnOrder} onPress={props.handleSubmit}>
                      <Text style={styles.btnText}>Заказать</Text>
                    </Pressable>
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
  emailForm: {
    width: '95%',
    alignSelf: 'center',
    paddingTop: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 15
  },
  formBackBtn: {
    height: 30,
    marginBottom: 0
  },
  formBackBtnText: {
    color: '#fe5f1e',
    fontSize: 16,
    fontWeight: '500'
  },
  payment: {
    width: '100%',

  },
  btnOrder: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fe5f1e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 4,
    elevation: 3,
    fontWeight: 400,
    fontSize: 12,
    borderRadius: 10
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
