import React, { useEffect, useRef, useState } from 'react';
import { Button, Image, Linking, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { RadioButton } from 'react-native-paper'
import BackArrowBtn from '../../../../../assets/img/backArrow.svg'

import mask from '../../../../../assets/other/mask';
import SlideButton from './SlideButton';
import { styles } from './styles/FormStyles';

const Form = ({ items, countById, totalItems, sendOrder, totalPrice, isModalVisible, toggleModal }) => {

  const [payValue, setValue] = React.useState('Наличные');
  const [activeMode, setActiveMode] = useState(false)
  const [orderType, setOrderType] = useState('Доставка')

  const toggleMode = () => {
    activeMode ? setActiveMode(false) : setActiveMode(true);
    activeMode ? setOrderType('Доставка') : setOrderType('Самовывоз');
  };
  
  const pizzasList = items.map((i) => {
    const count = countById(totalItems, i.id, i.activeSize);
    const value = `${i.title} | ${i.activeSize} | ${i.activePrice} ₽ | x ${count}шт.`
    return value
  })

  return (
    <Modal
      presentationStyle="pageSheet"
      isModalInPresentation={true}
      visible={isModalVisible}
      style={styles.modal}
      onSwipeComplete={toggleModal}
      swipeDirection="down"
      animationType="slide"
      onBackdropPress={toggleModal}>
      <View style={styles.emailForm}>
        <View style={styles.modalHeader}>
          <Pressable type="submit" style={styles.formBackBtn} onPress={toggleModal}>
            <Text style={styles.formBackBtnText}>Закрыть</Text>
          </Pressable>
          <Text style={styles.modalHeaderText}>Оформление</Text>
          <Text style={styles.unvisibleText}>Закрыть</Text>
        </View>
        <SlideButton toggleMode={toggleMode} activeMode={activeMode} />
        <View style={styles.emailFormWrapper}>
          <Text style={styles.formTitle}>Ваш заказ:</Text>
            <Formik initialValues={{ address: '', phoneNumber: '+7 ', comment: '' }}
              onSubmit={values => sendOrder(orderType, values, pizzasList.toString(), payValue)} style={styles.formTotal}>
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
                      <Text style={styles.formTotalPrice}>
                        На сумму: <Text style={styles.formTotalPriceSum}>{totalPrice} ₽</Text> 
                      </Text>
                      <Text style={styles.formText}>Введите ваш адрес:</Text>
                      <View style={styles.inpValid}>
                        <TextInput
                          required
                          style={styles.orderInput}
                          value={props.values.address}
                          onChangeText={props.handleChange('address')}
                          name="address"
                          placeholder="Ул. Горького, 54"
                          placeholderTextColor="#b8b8bb"
                        />
                      </View>
                      <Text style={styles.formText}>Введите ваш номер телефона:</Text>
                      <View style={styles.inpValid}>
                        <TextInput
                          required
                          style={styles.orderInput}
                          value={props.values.phoneNumber}
                          onChangeText={props.handleChange('phoneNumber')}
                          placeholder="+7 (978) 704 88 06"
                          placeholderTextColor="#b8b8bb"
                          name="telephone"
                          keyboardType="numeric"
                          maxLength={13}
                        />

                      </View>
                      <Text style={styles.formText}>Добавьте комментарий:</Text>
                      <View style={styles.inpValid}>
                        <TextInput
                          required
                          style={styles.orderInput}
                          value={props.values.comment}
                          onChangeText={props.handleChange('comment')}
                          name="comment"
                          placeholder="Например: заезд, номер подъезда..."
                          placeholderTextColor="#b8b8bb"
                        />
                      </View>
                      <Text style={styles.formText}>Спооб оплаты:</Text>
                      <View style="payment" name="checkbox">
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={payValue}>
                          <RadioButton.Item label="Наличные" value="Наличные" />
                          <RadioButton.Item label="Карта" value="Карта" />
                        </RadioButton.Group>
                      </View>
                    </View>

                      ) :
                      (
                        <View style={styles.selfDelivery}>
                          <Text>Empty...</Text>
                        </View>
                      )
                    }
                    <Pressable type="submit" style={styles.btnOrder} onPress={props.handleSubmit}>
                      <Text style={styles.btnOrderText}>Заказать</Text>
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

